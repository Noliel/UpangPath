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

// Suggestion endpoints
app.post('/api/suggestions', (req, res) => {
    const { suggestion, department } = req.body;
    const sql = 'INSERT INTO suggestion_data (suggestion, department) VALUES (?, ?)'; 

    db.query(sql, [suggestion, department], (err, result) => {
        if (err) {
            console.error('Error adding suggestion:', err);
            return res.status(500).json({ message: 'Error adding suggestion' });
        }
        return res.json({ message: 'Suggestion added successfully', id: result.insertId });
    });
});

// Get suggestions filtered by department
app.get('/api/suggestions', (req, res) => {
    const department = req.query.department; 
    const sql = 'SELECT * FROM suggestion_data WHERE department = ?';

    if (!department) {
        return res.status(400).json({ message: 'Department is required' });
    }

    db.query(sql, [department], (err, results) => {
        if (err) {
            console.error('Error fetching suggestions:', err);
            return res.status(500).json({ message: 'Error fetching suggestions' });
        }
        res.json(results);
    });
});

// Get the count of all suggestions
app.get('/api/suggestions', (req, res) => {
    const sql = 'SELECT * FROM suggestion_data';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching suggestions:', err);
            return res.status(500).json({ message: 'Error fetching suggestions' });
        }
        res.json(results);
    });
});
// Get unique departments
app.get('/api/departments', (req, res) => {
    const sql = 'SELECT DISTINCT department FROM suggestion_data';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching departments:', err);
            return res.status(500).json({ message: 'Error fetching departments' });
        }
        res.json(results);
    });
});

// Delete a suggestion by ID
app.delete('/api/suggestions/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM suggestion_data WHERE ID = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error deleting suggestion:', err);
            return res.status(500).json({ message: 'Error deleting suggestion' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Suggestion not found' });
        }
        res.json({ message: 'Suggestion deleted successfully' });
    });
});

// END Suggestion Endpoints

/*START */
app.post('/api/departments', upload.single('photo'), (req, res) => {
    const { roomname, description, department } = req.body;
    const photo = req.file ? req.file.filename : ''; // Only the filename is stored

    const sql = 'INSERT INTO departments (photo, roomname, description, department) VALUES (?, ?, ?, ?)';
    db.query(sql, [photo, roomname, description, department], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Entry created successfully', id: result.insertId });
    });
});

// Read all entries
app.get('/api/departments', (req, res) => {
    const { department } = req.query;
    let sql = 'SELECT * FROM departments';
    const values = [];

    if (department) {
        sql += ' WHERE department = ?';
        values.push(department);
    }

    db.query(sql, values, (err, results) => {
        if (err) return res.status(500).send('Error fetching departments');
        res.json(results);
    });
});

// Read a single entry
app.get('/api/departments/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM departments WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

// Update an entry
app.put('/api/departments/:id', upload.single('photo'), (req, res) => {
    const { id } = req.params;
    const { roomname, description, department } = req.body;
    const photo = req.file ? req.file.filename : null;

    let sql = 'UPDATE departments SET roomname = ?, description = ?, department = ?';
    const values = [roomname, description, department];
    
    // If a new photo is uploaded, include it in the update
    if (photo) {
        sql += ', photo = ?';
        values.push(photo);
    }

    sql += ' WHERE id = ?';
    values.push(id);

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error updating department:', err);
            return res.status(500).json({ message: 'Failed to update department' });
        }
        res.json({ message: 'Entry updated successfully' });
    });
});

// Delete an entry
app.delete('/api/departments/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM departments WHERE id = ?';
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

    // Admin profile endpoint
    app.get('/api/admin/profile', authenticateToken, (req, res) => {
    const adminId = req.admin.id; // Extract the admin ID from the JWT token

    const query = 'SELECT Id, username FROM admin WHERE Id = ?';
    db.query(query, [adminId], (err, results) => {
        if (err) return res.status(500).send('Error fetching admin profile');
        if (results.length === 0) return res.status(404).send('Admin not found');
        res.json(results[0]); // Send the admin profile details
    });
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