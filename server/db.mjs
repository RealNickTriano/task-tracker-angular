import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.CONN_STRING || "";

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
    console.log("Connection made");
} catch (e) {
    console.error(e);
}

let db = conn.db("project-manager");

export default db;