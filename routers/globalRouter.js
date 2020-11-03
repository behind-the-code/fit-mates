import express from "express";
import routes from "../routes";

import { home } from "../controllers/homeController";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
  postGithubLogin,
  githubLogin,
  getMe,
} from "../controllers/userController";
import { onlyPulic, onlyPrivate } from "../middlewares";
import passport from "passport";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
// globalRouter.get(routes.search, search);
globalRouter.get(routes.join, onlyPulic, getJoin);
globalRouter.post(routes.join, onlyPulic, postJoin, postLogin);
globalRouter.get(routes.login, onlyPulic, getLogin);
globalRouter.post(routes.login, onlyPulic, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);

// globalRouter.get(routes.github, githubLogin);
// globalRouter.get(
//   routes.githubCallback,
//   passport.authenticate("github", { failureRedirect: "/login" }),
//   postGithubLogin
// );

// globalRouter.get(routes.me, onlyPrivate, getMe);
export default globalRouter;
