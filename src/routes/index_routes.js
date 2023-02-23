import { Router } from "express";
import { index, indexControllers } from "../controllers/index_controllers.js";

const router = Router();

router.get("/", index);

router.get("/ping", indexControllers);

export default router;