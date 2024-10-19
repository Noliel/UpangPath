import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files in the 'uploads/' directory
    },
    filename: (req, file, cb) => {
        // Get the original file extension
        const ext = path.extname(file.originalname);
        // Generate a unique name for the file with the original extension
        cb(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
});

const upload = multer({ storage: storage });



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



/*START */
app.post('/api/cite', upload.single('photo'), (req, res) => {
    const photoUrl = '/uploads/' + req.file.filename;
    const { roomname, description } = req.body;

    const query = 'INSERT INTO cite (Photo, roomname, description) VALUES (?, ?, ?)';
    db.query(query, [photoUrl, roomname, description], (err, results) => {
        if (err) {
            console.error('Database Error:', err);
            return res.status(500).send('Internal Server Error');
        }
        res.json({ message: 'Record added successfully', id: results.insertId });
    });
});

// API to get all records
app.get('/api/cite', (req, res) => {
    const query = 'SELECT * FROM cite';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

// API to get a single record by ID
app.get('/api/cite/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM cite WHERE ID = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
});

// API to update a record
app.put('/api/cite/:id', upload.single('photo'), (req, res) => {
    const { id } = req.params;
    const photoUrl = req.file ? '/uploads/' + req.file.filename : req.body.Photo;
    const { roomname, description } = req.body;

    const query = 'UPDATE cite SET Photo = ?, roomname = ?, description = ? WHERE ID = ?';
    db.query(query, [photoUrl, roomname, description, id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Record updated successfully' });
    });
});

// API to delete a record
app.delete('/api/cite/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM cite WHERE ID = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Record deleted successfully' });
    });
});

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


/* END */

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

app.put('/update/announcement/:id', (req, res) => {
    const sql = 'UPDATE announcement_data SET `title`=?, `announcement`=? WHERE ID=?'
    const id = req.params.id
    db.query(sql, [req.body.title, req.body.announcement, id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"})
            return res.json(result)
    })
})

app.delete('/delete/announcement/:id', (req, res) => {
    const sql = "DELETE FROM announcement_data WHERE ID = ?"
    const id  = req.params.id
    db.query(sql, [id], (err, result) => {
        if(err) return res.json({Message: "Error inside server"})
            return res.json(result)
    })
}) 

app.get('/export/announcements', (req, res) => {
    const sql = "SELECT * FROM announcement_data";
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ Message: "Error inside server" });

        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(result);

        res.header('Content-Type', 'text/csv');
        res.attachment('announcements.csv');
        res.send(csv);
    });
});



app.listen(8000, () => {
    console.log("Is Running")
})