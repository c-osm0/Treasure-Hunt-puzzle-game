import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { fileURLToPath } from 'url';
import path from "path"



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const register = async (req, res, next) => {
    try {

        const pass = req.body.password;
        const cpass = req.body.cpassword;
        if (pass === cpass) {
            const salt = await bcrypt.genSaltSync(10);
            const hash = await bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash,

            })

            await newUser.save()
            const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, process.env.JWT)
        const { password, isAdmin, ...otherDetails } = newUser._doc;
            res.cookie("access_token", token, {
                expires: new Date(Date.now() + 600000),
                httpOnly: true,
            }).status(200).sendFile(__dirname + "/index.html");
            // res.status(200).render("index")
        }
    } catch (err) {
        next(err);
    }

}

export const login = async (req, res, next) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "User not found!"));
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            expires: new Date(Date.now() + 600000),
            httpOnly: true,
        }).status(200).sendFile(__dirname + "/game.html");



    } catch (err) {
        next(err);
    }

}

