import { Router } from "express";
import teacherController from "./../controllers/teacher.controller.js";

const router = Router();

router.get("/", teacherController.getAll);
router.get("/:id", teacherController.getById);
router.post("/", teacherController.create);
router.delete("/:id", teacherController.remove);

export default router;
