const express= require("express");
const dotenv = require ("dotenv").config();
const errorHandler= require("./middleware/errorHandler");
const connectDb = require("./config/dbconnection");

connectDb();

const app = express();
const port = process.env.PORT||5000;

app.use(express.json()); 
app.use("/api/contacts", require("./routes/contactsRoutes") );
app.use("/api/users", require("./routes/userRoutes") );

app.use(errorHandler);

app.listen (port,() =>{
    console.log(`Server running in the port ${port}`); 
}); 