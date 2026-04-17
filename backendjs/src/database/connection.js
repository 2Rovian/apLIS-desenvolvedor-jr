import mysql from "mysql2/promise";

export const db = mysql.createPool({
    host: "mysql",
    user: "root",
    password: "root",
    database: "aplis_db",
    waitForConnections: true,
    connectionLimit: 10
});