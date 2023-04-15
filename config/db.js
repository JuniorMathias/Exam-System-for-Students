const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//SETTING DB AND HIDING USING DOTENV
const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.3l6fe4u.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log("Conectou ao banco!");
        return dbConn
    } catch (error){

        console.log("Error: " + error);
    }
};

conn();

module.exports = conn;
//connection