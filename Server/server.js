import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import multer from 'multer';
import path from 'path';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'upangpathways'
})

const JWT_SECRET = 'helo'


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Save to 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Use unique filename
    }
});
const upload = multer({ storage: storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/*START */
app.post('/api/cite', upload.single('photo'), (req, res) => {
    const { roomname, description } = req.body;
    const photo = req.file ? req.file.filename : ''; // Only the filename is stored

    const sql = 'INSERT INTO cite (photo, roomname, description) VALUES (?, ?, ?)';
    db.query(sql, [photo, roomname, description], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Entry created successfully', id: result.insertId });
    });
});
// Read all entries
app.get('/api/cite', (req, res) => {
    const sql = 'SELECT * FROM cite';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Read a single entry
app.get('/api/cite/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM cite WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

// Update an entry
app.put('/api/cite/:id', upload.single('photo'), (req, res) => {
    const { id } = req.params;
    const { roomname, description } = req.body;
    const photo = req.file ? req.file.filename : '';

    let sql = 'UPDATE cite SET roomname = ?, description = ?';
    const values = [roomname, description];
    if (photo) {
        sql += ', photo = ?';
        values.push(photo);
    }
    sql += ' WHERE id = ?';
    values.push(id);

    db.query(sql, values, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Entry updated successfully' });
    });
});

// Delete an entry
app.delete('/api/cite/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM cite WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Entry deleted successfully' });
    });
});
/* END */

/*  LOGIN / REGISTER*/
    /* REGISTER */
    app.post('/api/register', (req, res) => {
        const { username, password } = req.body;
    
        // Hash the password
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return res.status(500).send('Error hashing password');
            
            // Insert the new admin into the database
            const query = 'INSERT INTO admin (username, password) VALUES (?, ?)';
            db.query(query, [username, hash], (err, result) => {
                if (err) return res.status(500).send('Error registering admin');
                res.status(200).send('Admin registered successfully');
            });
        });
    });
    /* LOGIN */
    app.post('/api/login', (req, res) => {
        const { username, password } = req.body;
    
        // Check if the admin exists
        const query = 'SELECT * FROM admin WHERE username = ?';
        db.query(query, [username], (err, results) => {
            if (err || results.length === 0) return res.status(401).send('Invalid credentials');
            
            // Compare password
            bcrypt.compare(password, results[0].password, (err, isMatch) => {
                if (err || !isMatch) return res.status(401).send('Invalid credentials');
    
                // Generate JWT token
                const token = jwt.sign({ id: results[0].Id }, JWT_SECRET, { expiresIn: '1h' });
                res.json({ token });
            });
        });
    });
    /* AUTHENTICATION */
    function authenticateToken(req, res, next) {
        const token = req.headers['authorization'];
        if (!token) return res.status(403).send('Token is required');
    
        jwt.verify(token, JWT_SECRET, (err, admin) => {
            if (err) return res.status(403).send('Invalid token');
            req.admin = admin;
            next();
        });
    }

    // Protected route example
    app.get('/api/admin/dashboard', authenticateToken, (req, res) => {
    res.send('Welcome to the admin dashboard');
});

/*  END OF LOGIN / REGISTER*/


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