import express from "express";
import { PORT } from "./config.js";
import routerUser from "./router/router.user.js";
import routerAcount from "./router/router.acount.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

    app.use(express.json());
    app.use(routerUser);
    app.use(routerAcount);
    app.use(errorHandler);

app.listen(PORT, () =>console.log("Server on port :",PORT));
