import express from "express"
import { login, register } from "../controllers/auth.js";
import { verifyToken } from "../utils/verifyToken.js";
import { fileURLToPath } from 'url';
import path from "path"



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


const router = express.Router();
router.post("/register", register)
router.post("/login", login)

router.get("/game", verifyToken, (req, res) => {
    res.render("game.hbs")
})

export default router;