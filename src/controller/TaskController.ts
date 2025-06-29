import { Request, Response } from "express";
import Task from "../modules/TaskModule";

export class TaskController {
  static createTask = async (req: Request, res: Response) => {
    try {
      const task = new Task(req.body);
      await task.save();
      res.send("Tarea creada");
    } catch (error) {
      console.log(error);
    }
  };

  static getAllTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await Task.find({});
      res.send(tasks);
    } catch (error) {
      console.log(error);
    }
  };

  static getTaskById = async (req: Request, res: Response) => {
    try {
      res.send(req.task);
    } catch (error) {
      console.log(error);
    }
  };

  static updateTask = async (req: Request, res: Response) => {
    try {
      req.task.name = req.body.name;
      req.task.subDescription = req.body.subDescription;
      req.task.description = req.body.description;

      await req.task.save();

      res.send("Tarea Actualizada");
    } catch (error) {
      console.log(error);
    }
  };

  static updateTaskStatus = async (req: Request, res: Response) => {
    try {
      req.task.completed = req.body.completed;
      await req.task.save();
      res.send("Estado Actualizado");
    } catch (error) {
      console.log(error);
    }
  };

  static deleteTask = async (req: Request, res: Response) => {
    try {
      await req.task.deleteOne();
      res.send("Tarea Eliminada");
    } catch (error) {
      console.log(error);
    }
  };
}
