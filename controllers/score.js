import User from "../models/User.js";


export const updateScore =async(req,res,next)=> {
    try {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{ $set: req.body},{new:true})
        res.status(200).json(updatedUser)
    // console.log("Hotels");
} catch (err) {
    next(err);
}
}



