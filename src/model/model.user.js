import { pool } from "../db.js";

const model = {};
    /**
     * 
     * @returns users rows;
     */
    model.getUsers = async () => await pool.query("SELECT * FROM users");
    /**
     * 
     * @param {number} id 
     * @returns user row
     */
    model.getUser = async (id) => await pool.query("SELECT * FROM users WHERE id = ?",[id]);
    /**
     * 
     * @param {string} user 
     * @param {string} email 
     * @param {string} password 
     * @returns row
     */
    model.postUser = async ( user , email , password ) => await pool.query("INSERT INTO users ( id , user , email , password ) VALUES (NULL , ? , ? , ?)",[ user , email , password ]);
    /**
     * 
     * @param {number} id 
     * @returns row
     */
    model.deleteUser = async ( id ) => await pool.query("DELETE FROM users WHERE id = ?", [id]);

    export default model