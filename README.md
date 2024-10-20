2. Install Frontend Dependencies

Navigate to the frontend directory and install the dependencies:

bash

cd frontend
npm install
# or
yarn install

3. Install Ballerina Dependencies

Navigate to the backend directory and install any required Ballerina modules:

bash

cd ../backend
ballerina pull

Running the Backend (Ballerina)

To start the Ballerina service, follow these steps:

    Navigate to the backend directory:

    bash

cd backend

Open the backend/main.bal file and configure the MongoDB connection string and credentials if necessary. For example:

ballerina

mongo:Client mongoClient = check new("mongodb://localhost:27017", "donorDB");

Run the Ballerina service:

bash

    ballerina run main.bal

    This should start the backend server on the default port (e.g., 9091).

Running the Frontend (React)

To run the React frontend application:

    Open a new terminal window and navigate to the frontend directory:

    bash

cd frontend

Start the React development server:

bash

    npm start
    # or
    yarn start

    The application will open in your browser at http://localhost:3000.

Environment Variables

You may need to configure the following environment variables:

    MongoDB URI: Update the MongoDB connection string in the Ballerina backend (backend/main.bal).
    Backend API URL: Update the backend URL in the frontend React application (frontend/src/config.js) if it differs from http://localhost:9091.

js

// Example in config.js
export const API_URL = "http://localhost:9091";

Using the Application

Once both the backend and frontend are running:

    The React frontend can be accessed at http://localhost:3000.
    The backend (API) runs on http://localhost:9091, where it handles requests from the frontend.
