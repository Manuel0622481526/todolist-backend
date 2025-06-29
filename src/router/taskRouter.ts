import { Router } from "express";
import { body, param } from "express-validator";
import { TaskController } from "../controller/TaskController";
import { handleInputErrors } from "../middlewares/validator";
import { taskExists } from "../middlewares/task";

const router = Router();

//routing
router.post(
  "/",
  body("name").notEmpty().withMessage("El nombre de la tarea es obligatorio"),
  body("subDescription")
    .notEmpty()
    .withMessage("La sub description es obligatoria"),
  body("description").notEmpty().withMessage("La descripcion es obligatoria"),
  handleInputErrors,
  TaskController.createTask
);

//obtener
router.get("/", TaskController.getAllTasks);

//obtener por id
router.param("id", taskExists);
router.get("/:id", TaskController.getTaskById);

//update
router.put(
  "/:id",
  body("name").notEmpty().withMessage("El nombre de la tarea es obligatorio"),
  body("subDescription")
    .notEmpty()
    .withMessage("La sub description es obligatoria"),
  body("description").notEmpty().withMessage("La descripcion es obligatoria"),
  handleInputErrors,
  TaskController.updateTask
);

router.put(
  "/:id/status",
  body("completed")
    .notEmpty()
    .withMessage("El estado de la tarea es obligatorio"),
  handleInputErrors,
  TaskController.updateTaskStatus
);

//delete
router.delete("/:id", TaskController.deleteTask);

export default router;
