import express from "express"
import { login,  register } from "../controllers/auth.js";
import { verifyToken } from "../utils/verifyToken.js";


const app = express();

 
const router=express.Router();
router.post("/register",register)
router.post("/login",login)

router.get("/game",verifyToken,(req,res)=>{
    res.render("game")
})

export default router;