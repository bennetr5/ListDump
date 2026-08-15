import express from "express"
import { login } from "../controllers/loginController.js";
import { home, redirectHome } from "../controllers/homeController.js"

const router = express.Router();

router.get('/', redirectHome);
router.get('/login', login);
router.get('/home', home);

export default router;