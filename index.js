import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import path from "path"
// import scoreRoute from "./routes/score.js"
import usersRoute from "./routes/users.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import hbs from "hbs"
import {fileURLToPath} from 'url';




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
dotenv.config()

const connect = async () => {

    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO);
        console.log("DB connected")
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})
const static_path=path.join(__dirname,"../api/public");
const template_path=path.join(__dirname,"../api/templates/views");
const partials_path=path.join(__dirname,"../api/templates/partials");
console.log(__dirname)
app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path)
app.get('/',(req,res)=> {
    res.render("index.hbs")
})

// //middlewares
app.use(cors());
app.use(cookieParser());


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500;
    const errorMessage=err.message || "Something went wrong";
    
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})


app.listen(8800, () => {
    connect();
    console.log("connected to backend");
})
