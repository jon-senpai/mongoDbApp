import express from "express";
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb"
import dotenv from "dotenv"
const router = express.Router();


const client = new MongoClient(process.env.ATLAS_URI)

let conn
try{
    conn = await client.connect()
} catch (e) {
    console.error(e)
}

let db = conn.db('sample_training')

export default db