import ballerina/http;
import ballerina/io;
import ballerina/uuid;
import ballerinax/mongodb;

// MongoDB configuration
configurable string host = "localhost";
configurable int port = 27017;

final mongodb:Client mongoDb = check new ({
    connection: {
        serverAddress: {
            host,
            port
        }
    }
});

// Define CORS configuration
@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:5173"],
        allowHeaders: ["REQUEST_ID", "Content-Type"],
        exposeHeaders: ["RESPONSE_ID"],
        allowMethods: ["GET", "POST", "OPTIONS"],
        maxAge: 84900
    }
}

service / on new http:Listener(9091) {
    private final mongodb:Database userDb;

    function init() returns error? {
        self.userDb = check mongoDb->getDatabase("vitalDrop");
        io:println("MongoDB connected to UserDb");
    }

    // Handle user signup
    resource function post signup(UserInput input) returns json|error {
        // Check if the email already exists
        mongodb:Collection user = check self.userDb->getCollection("user");
        

        // If email doesn't exist, proceed to create the user without hashing the password
        string id = uuid:createType1AsString();
        User newUser = {id, ...input}; // Store the password as is
        check user->insertOne(newUser);
        return {id: id};
    }

    // Handle user login
    resource function post login(LoginInput input) returns json|error {
        mongodb:Collection user = check self.userDb->getCollection("user");
        User? foundUser = check user->findOne({email: input.Email, password: input.Password}); // Directly match the plain text password

        if (foundUser is User) {
            return {id: foundUser.id}; // Return user ID on successful login
        } else {
            return error("Invalid email or password"); // Return error message for failed login
        }
    }

    // Add this function to your Ballerina service
    resource function get user(string id) returns User|error {
        mongodb:Collection users = check self.userDb->getCollection("user");
        User? user = check users->findOne({id: id});

        if (user is User) {
            return user; // Return user data
        } else {
            return error("User not found");
        }
    }

    resource function get donors() returns Donor[]|error {
        // Get the "donors" collection
        mongodb:Collection user = check self.userDb->getCollection("user");

        // Query to fetch all donors
        Donor[] donorList = check user->findOne({id:id}); // Empty query to fetch all documents

        if (donorList is Donor[]) {
            return donorList; // Return the list of donors
        } else {
            return error("No donors found"); // Return an error if no donors are found
        }
    }

}


// UserInput type for creating new users
public type UserInput record {|
      string fullName;
      string gender;
      string bloodType;
      string phoneNumber;
      string email;
      string password;
      string address;  
      string donatedBefore;
      string lastDonationDate;
      string weight;
      string chronicConditions;
      string vaccinations;
      string bloodConditions;
      string pregnant;
|};

// LoginInput type for user login 
public type LoginInput record {|
    string Email;
    string Password;
|};

// User type which includes a unique ID 
public type User record {|
    readonly string id;
    *UserInput;
|};
type Donor record {
    string id;
    string name;
    string bloodType;
    string location;
    string lastDonationDate;
    string contact;
};