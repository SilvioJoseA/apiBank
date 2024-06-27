import { Router } from "express";
import controller from "../controller/controller.acount.js";

const router = Router();
    
    router.get('/acounts', controller.getAcounts);
    router.get('/acounts/:id', controller.getAcount);
    router.post('/acount', controller.postAcount);
    router.delete('/acount/:id', controller.deleteAcount);

export default router;