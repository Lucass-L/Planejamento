import { Router } from "express";
import userController from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.delete("/:id", userController.remove);

export default router;
