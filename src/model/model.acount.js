import { pool } from "../db.js";

const model = {};
    /**
     *  
     * @returns rows
     */
    model.getAcounts = async () => await pool.query("SELECT * FROM acounts");
    /**
     * 
     * @param {number} id 
     * @returns row
     */
    model.getAcount = async ( id ) => await pool.query("SELECT * FROM acounts WHERE id = ?",[id]);
    /**
     * 
     * @param {number} id 
     * @returns 
     */
    model.deleteAcoutn = async ( id ) => await pool.query("DELETE FROM acounts WHERE id = ?", [id]);
    /**
     * 
     * @param {number} cbu 
     * @param {string} alias 
     * @param {number} amount 
     * @returns row 
     */
    model.postAcount = async ( cbu , alias , amount ) => await pool.query("INSERT INTO acounts ( id , cbu , alias , amount ) VALUES (NULL , ? , ? , ? )",[cbu,alias,amount]);

export default model;