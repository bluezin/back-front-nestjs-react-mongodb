import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { MongooseModule } from "@nestjs/mongoose";
import * as dotenv from "dotenv";

dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(`${process.env["MONGO_URL"]}`), TasksModule],
})
export class AppModule {}
