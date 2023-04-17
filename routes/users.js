import express from "express"
import { deleteUser, getUser, getUsers, updateUserscore, getAdmin } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
// import { checkme } from "../controllers/score.js";
import { fileURLToPath } from 'url';
import path from "path"



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send(req.user);
    // res.status(200).json(user)
})

router.get("/checkuser", verifyToken, getUser)
router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
    res.send("Hello admin,logged in and you can delete all account!");
})



//update
router.put("/:id", verifyUser, (req, res) => {
    res.send(req.user)
});
//delete
router.delete("/:id", verifyUser, deleteUser);

router.post("/updatescore", verifyToken, updateUserscore)

router.post("/admin", getAdmin)
//get all
router.get("/", getUsers);

export default router;