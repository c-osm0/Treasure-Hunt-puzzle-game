import jwt from "jsonwebtoken";
import { createError } from "./error.js";


export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated! Please sign-in/sign-up"))
        

    }

    const verifyUser=jwt.verify(token, process.env.JWT,(err,user)=> {
        if (err) return next(createError(403, "Token is not valid!!"));
        req.user = user;
    });
    // const user=await User.findOne({_id:verifyUser._id})
    next();
    } catch (error) {
        res.send("error");
    }
    
};


export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            // res.status(200).json(req.user)
            next()
        }
        else {
            if (err) return next(createError(403, "Not authorized"));
        }
    });

};
export const getme = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            res.status(200).json(req.user)

        }
        else {
            if (err) return next(createError(403, "Not authorized"));
        }
    });

};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        }
        else {
            if (err) return next(createError(403, "Not authorized"));
        }
    });

};