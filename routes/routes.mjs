import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb'
const router = express.Router();

// importing routes from grades.mjs 
import grades from "./routes/grades.mjs"

app.use(express.json()) // middleware for parsing JSON and bind it to req.body

app.get("/", (req, res) => {
    res.send("Welcome to the API.")
})

router.get("/:id", async (req, res) => {
    let collection =  db.collection("grades");
    let query = { _id: new ObjectId(req.params.id)};
    let result = await collection.findone(query);
    
    if (!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
});

app.use("/grades", grades);

app.use((err, _req, res, next) => {
    res.status(500).send("Seems like we messed up")
})
// START THE EXPRESS SERVER 
app.listen (PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});
