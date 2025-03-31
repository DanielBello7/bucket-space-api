import express from "express";
import { FileModule } from "./file.module";
import { database } from "@/datasource";

const router = express.Router();

const module = new FileModule(database);

router.use("/", module.controller.get());

export default router;
