import { Request, Response, NextFunction } from "express";
import Task, { ITask } from "../modules/TaskModule";

declare global {
  namespace Express {
    interface Request {
      task: ITask;
    }
  }
}

export const taskExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      const error = new Error("Id no valido");
      res.status(404).json({ error: error });
      return;
    }
    req.task = task;

    next();
  } catch (error) {
    res.status(500).json({ error: "No se encontro la tarea" });
  }
};
