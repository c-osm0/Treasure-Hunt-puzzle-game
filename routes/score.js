import express from "express"

import { verifyUser } from "../utils/verifyToken.js";
import { checkme, updateScore } from "../controllers/score.js";

const router=express.Router();

router.put("/:id",verifyUser, updateScore);
router.get("/checkme",checkme);

export default router;