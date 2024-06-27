import { pool } from "../db.js";
import model from "../model/model.user.js";

const controller = {};
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     */
    controller.getUsers = async ( req , res ) => {
        try {
            const [ rows ] = await model.getUsers();
                res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message:"Something was wrong"});
        }
    }
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     */
    controller.getUser = async ( req , res ) => {
        try {
            
            const { id } = req.params;
            const [ row ] = await model.getUser(id);
                res.json(row);

        } catch (error) {
            console.error(error);
            res.status(500).json({message:"Something was wrong"});
        }
    }
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     */
    controller.deleteUser = async ( req , res ) => {
        try {

            const { id } = req.params;
            const [ row ] = await model.deleteUser(id);
                res.json(row);

        } catch (error) {
            console.error(error);
            res.status(500).json({ message : "Something was wrong"});
        }
    }
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     */
    controller.postUser = async ( req , res ) => {
        try {
            const { user , email , password } = req.body;
            const [ row ] = await model.postUser(user,email,password);
                res.json(row);
        } catch (error) {
            console.error(error);
            res.status(500).json({message: "Something was wrong"});
        }
    }

    export default controller;