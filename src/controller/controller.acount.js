import model from "../model/model.acount.js";

const controller = {};
/**
 * 
 * @param {object} req 
 * @param {object} res 
 */
    controller.getAcount = async ( req , res ) => {
        try {
            const { id } = req.params;
            const [ row ] = await model.getAcount(id);
                res.json(row);
        } catch (error) {
            console.error(error);
            res.status(500).json({message:"Something was wrong!"});
        }
    }
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     */
    controller.getAcounts = async ( req , res ) => {
        try {
            const [ rows ] = await model.getAcounts();
            res.json(rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({message:"Something was wrong!"});
        }
    }
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     */
    controller.deleteAcount = async ( req , res ) => {
        try {
            const { id } = req.params;
            const [ row ] = await model.deleteAcoutn(id);
            res.json(row);
        } catch (error) {
            console.error(error);
            res.status(500).json("Something was wrog!");
        }
    }
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     */
    controller.postAcount = async ( req , res ) => {
        try {
            const { cbu , alias , amount } = req.body;
            const [ row ] = await model.postAcount( cbu , alias , amount );
                res.json( row );
        } catch (error) {
            console.error(error);
            res.status(500).json({message:"Something was wrong!"});
        }
    }
export default controller;