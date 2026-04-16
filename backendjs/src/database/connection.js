import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "localhost",
    root: "root",
    password: "password",
    database: "apiLIS-schema",
    waitForConnections: true,
    connectionLimit: 10
});