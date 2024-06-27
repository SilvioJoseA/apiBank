import { config } from "dotenv";
    
    export const PORT = process.env.PORT || 3006;
    export const DB_USER = process.env.DB_USER || 'root';
    export const DB_DATABASE = process.env.DB_DATABASE || 'bank';
    export const DB_HOST = process.env.DB_HOST || 'localhost';
    export const DB_PASSWORD = process.env.DB_PASSWORD || '';
    export const DB_PORT = process.env.DB_PORT || 3306;

config();