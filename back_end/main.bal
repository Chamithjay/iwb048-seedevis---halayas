import ballerina/http;

service /signup on new http:Listener(9090) {
    resource function get .() returns error? {
    }
}
