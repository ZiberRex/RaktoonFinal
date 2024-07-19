import { Router } from "express";
import {
  createTask,
  deleteTask,
  renderTasks,
  taskToggleDone,
  renderTaskEdit,
  editTask,
  renderHome,
} from "../controllers/tasks.controllers";

const router = Router();

// Render all tasks
router.get("/Tareas", renderTasks);

router.get("/", renderHome);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
