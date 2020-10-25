import express from "express";
import routes from "../routes";
import {
  tutorDetail
} from "../controllers/tutorController";
// import { uploadVideo, onlyPrivate } from "../middlewares";

const tutorRouter = express.Router();

tutorRouter.get(routes.tutorDetail(), tutorDetail);

export default tutorRouter;
