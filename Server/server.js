import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'upangpathways'
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM announcement_data"
    db.query(sql, (err, result) => {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

app.post('/create/announcement', (req, res) => {
    const sql = "INSERT INTO announcement_data (`title`, `announcement`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.announcement,
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/read/announcement/:id', (req, res) => {
    const sql = "SELECT * FROM announcement_data WHERE ID = ?"
    const id = req.params.id;

    db.query(sql,[id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"})
        return res.json(result)
    })
})

app.listen(8000, () => {
    console.log("Is Running")
})