import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  name: string;
  subDescription: string;
  description: string;
  completed: boolean;
}

export const TaskSchema: Schema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    subDescription: {
      type: String,
      trim: true,
      require: true,
    },
    description: {
      type: String,
      trim: true,
      require: true,
    },
    completed: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model<ITask>("Task", TaskSchema);
export default Task;
