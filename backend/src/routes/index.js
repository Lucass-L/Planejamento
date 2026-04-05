import {Router} from "express";

import teacherRoutes from "./teacher.routes.js";
import userRoutes from "./user.routes.js";
import classRoutes from "./class.routes.js";

const router = Router();

router.get("/", (req,res) => res.send("Backend path raiz"))

router.use("/teachers", teacherRoutes);
router.use("/users", userRoutes);
router.use("/class", classRoutes);

export default router