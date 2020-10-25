import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import mongoStore from "connect-mongo";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localMiddleWare } from "./middlewares";
import Tutor from "./models/Tutor";
import "./passport";
import tutorRouter from "./routers/tutorRouter";
const app = express();

const cookieStore = mongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use("/assets", express.static("assets"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new cookieStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleWare);

// Tutor.create({
//   tutorName: "이선우",
//   tutorType: "PT",
//   tutorFee: 55000,
//   short_description: "올바른 PT 코칭 5년 - 이선우 강사님",
//   description: "일대일 레슨 | 주 1회, 월 4세션 진행\n세션당 50분 진행",
//   possibleRegion: ["강남구", "서초구", "용산구"],
//   expert: ["체중감량", "근력증가", "재활관리", "체형교정"],
// });
// Tutor.create({
//   tutorName: "조혜주",
//   tutorType: "필라테스",
//   tutorFee: 169000,
//   short_description: "자세교정 코칭 10년 - 조혜주 강사님",
//   description: "일대일 레슨 | 주 1회, 월 4세션 진행\n세션당 50분 진행",
//   possibleRegion: ["강남구", "서초구", "용산구"],
//   expert: ["근력증가", "재활관리", "체형교정"],
// });
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.tutors, tutorRouter);

export default app;
