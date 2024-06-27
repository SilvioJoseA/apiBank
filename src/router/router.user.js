import { Router } from "express";
import controller from "../controller/controller.user.js";

const router = Router();

    router.get('/users',controller.getUsers);
    router.get('/users/:id',controller.getUser);
    router.delete('/users/:id',controller.deleteUser);
    router.post('/users',controller.postUser);

export default router; 