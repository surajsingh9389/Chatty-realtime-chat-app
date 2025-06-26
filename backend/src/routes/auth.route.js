import express from "express";
import { singnup, login, logout, updateProfile, checkAuth} from "../controller.js/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", singnup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth);

export default router;
