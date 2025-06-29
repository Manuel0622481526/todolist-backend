import colors from "colors";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL!);
    const url = `MongoDB conectado en el puerto ${connection.connection.port}`;
    console.log(colors.cyan.bold(url));
  } catch (error) {
    console.log(colors.red.bold("Hubo un error"));
  }
};
