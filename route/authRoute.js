import express  from "express";
const router=express.Router();
import {registerController,
    loginController,
    testController,
} from '../controller/authController.js';
import { isAdmin, requireSigning } from "../middleware/authMiddleware.js";

router.post('/register',registerController);
router.post('/login',loginController);

//protrct route
router.get('/test',requireSigning,isAdmin,testController)



export default router;