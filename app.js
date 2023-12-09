import express from "express";
import session from "express-session";
// import session from "cookie-session";

import "dotenv/config.js";
import Hello from "./hello.js";
import MovieRoutes from "./movies/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./users/routes.js";
import ReviewsRoutes from "./reviews/routes.js";
import FollowsRoutes from "./follows/routes.js";
import CompanyRoutes from "./companies/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/project";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}


app.use(session(sessionOptions));

app.use(express.json());

Hello(app);
MovieRoutes(app);
UserRoutes(app);
ReviewsRoutes(app);
FollowsRoutes(app);
CompanyRoutes(app);

app.listen(process.env.PORT || 4000);
