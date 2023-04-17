import User from "../models/User.js";
import { createError } from "../utils/error.js";
import { verifyToken } from "../utils/verifyToken.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { fileURLToPath } from 'url';
import path from "path"



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)

    } catch (err) {
        next(err);
    }
}
export const updateUserscore = async (req, res, next) => {
    // res.json(req.user)
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)

    } catch (err) {
        next(err);
    }

}

export const deleteUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")

    } catch (err) {
        next(err);
    }
}

export const getUser = async (req, res, next) => {
    // res.status(200).json(req.user)
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user)

    } catch (err) {
        next(err);
    }
}
export const getUsers = async (req, res, next) => {

    try {
        const Users = await User.find();
        res.status(200).json(Users)

    } catch (err) {
        next(err)
    }
}
export const getAdmin = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return next(createError(404, "User not found!"));
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)
        const { password, isAdmin, ...otherDetails } = user._doc;




        if (user.isAdmin) {
            res.cookie("access_token", token, {
                expires: new Date(Date.now() + 600000),
                httpOnly: true,
            }).sendFile(__dirname + "/admin.html")
        }
        else {
            if (err) return next(createError(403, "Not authorized"));
        }


    } catch (err) {
        next(err);
    }

}

export const checkme = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            res.status(200).json(req.user)
        }
        else {
            if (err) return next(createError(403, "No user"));
        }
    });

};