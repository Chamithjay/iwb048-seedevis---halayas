import ballerina/http;
import ballerina/io;
import ballerina/uuid;
import ballerinax/mongodb;

// MongoDB configuration
configurable string host = "localhost";//add your host
configurable int port = 27017;//add your port

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
        allowOrigins: ["http://localhost:5173"],//add your port
        allowHeaders: ["REQUEST_ID", "Content-Type"],
        exposeHeaders: ["RESPONSE_ID"],
        allowMethods: ["GET", "POST", "OPTIONS"],
        maxAge: 84900
    }
}

service / on new http:Listener(9091) {
    private final mongodb:Database userDb;

    function init() returns error? {
        self.userDb = check mongoDb->getDatabase("vitalDrop");//create your database
        io:println("MongoDB connected to UserDb");
    }

    // Handle user signup
    resource function post signup(UserInput input) returns json|error {
        
        mongodb:Collection user = check self.userDb->getCollection("user");//create your collection
        

      
        string id = uuid:createType1AsString();
        User newUser = {id, ...input}; // Store the password as is
        check user->insertOne(newUser);
        return {id: id};
    }

    // Handle user login
    resource function post login(LoginInput input) returns json|error {
        mongodb:Collection user = check self.userDb->getCollection("user");
        User? foundUser = check user->findOne({email: input.Email, password: input.Password}); 

        if (foundUser is User) {
            
            return {id: foundUser.id}; // Return user ID on successful login
        } else {
            return error("Invalid email or password"); // Return error message for failed login
        }
    }
    //API donor
    resource function post donor(donorInput input) returns json|error {
       
        mongodb:Collection user = check self.userDb->getCollection("donor");//create your collection
        

        
        string id = uuid:createType1AsString();
        donor newdonor = {id, ...input}; // Store the password as is
        check user->insertOne(newdonor);
        return {id: id};
    }
    resource function get donors() returns json|error {
    mongodb:Collection donorCollection = check self.userDb->getCollection("donor");

    // Retrieve all donor documents from the collection
    stream<donor, error?> donorStream = check donorCollection->find();
    json[] donorList = check from donor d in donorStream select d.toJson();
    return donorList;
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

    
}


// UserInput type for creating new users
public type UserInput record {|
      string fullName;
      string phoneNumber;
      string email;
      string password;
  
      
|};

// LoginInput type for user login 
public type LoginInput record {|
    string Email;
    string Password;
|};

public type donorInput record {|
    string name;
    string bloodType;
    string location;
    string lastDonationDate;
    string contact;

|};
// User type which includes a unique ID 
public type User record {|
    readonly string id;
    *UserInput;
|};
public type donor record {|
    readonly string id;
    *donorInput;
|};