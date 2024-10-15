import ballerina/sql;
import ballerinax/mysql;
import ballerinax/mysql.driver as _;
import ballerina/http;

// Initializes the database as a prerequisite to `Database Access` samples.
service / on new http:Listener(8080) {  
    public function main() returns sql:Error? {
        mysql:Client mysqlClient = check new (host = "localhost", port = 3306, user = "root",
                                            password = "Jayavihan@2002");

    
        // Adds the records to the `albums` table.
        _ = check mysqlClient->execute(`INSERT INTO vitaldrop.user(userName,password)
                                        VALUES("A-123", "Lemonade");`);


    
        check mysqlClient.close();
    }
}