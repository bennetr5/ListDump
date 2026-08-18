import express from "express";
import { login } from "../controllers/loginController.js";
import { home } from "../controllers/homeController.js";
import { getUserListings } from "../controllers/manageController.js";

const router = express.Router();

router.get('/home', home);
router.get('/manage', getUserListings);

router.post('/login', login);

export default router;