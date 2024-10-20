<h1 align="center" id="title">Vital Drop</h1>

<p id="description">This project is about connecting Blood donors with people who are in need with Blood efficiently.</p>

<h2>🛠️ Installation Steps:</h2>

<p>1. Navigate to the backend directory:</p>

```
cd back_end
```

<p>2. Open the back_end/main.bal file and configure the MongoDB connection string and credentials</p>

```
mongo:Client mongoClient = check new("mongodb://localhost:27017" "donorDB");

```

<p>3. Change the port in main.bal</p>

```
 cors: {allowOrigins: [*ADD YOUR PORT*]"]}
```
<p>4. Create a database in MongoDB named "vitalDrop"</p>

<p>5. Create two collections named "user" &amp; "donor"</p>

<p>6. Run the Ballerina service:</p>

```
ballerina run main.bal
```

<p>7. Open a new terminal window and navigate to the frontend directory:</p>

```
cd front_tend
```

<p>8. Start the React+vite development server:</p>

```
npm run dev
```

  
<h2>💻 Built with</h2>

Technologies used in the project:

*   Ballerina
*   React.js
*   MongoDB
