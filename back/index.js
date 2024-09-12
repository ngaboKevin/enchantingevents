const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const mongoose  = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'karaporti',
    database: 'enchantingEvents'
});


db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});


//MongoDB connection
mongoose.connect('mongodb://localhost:27017/enchantingEvents', {
  useNewUrlParser: true
})

// define the schema for the apps
const applicantSchema = new mongoose.Schema({
  namees:{type: String, required: true},
  email:{type:String, required:true},
  phone:{type:String},
  address:{type:String},
  services:{type:String},
  fee:{type:Number},
  cv: {type: Buffer}
})

const Applicant = mongoose.model('Applicant', applicantSchema);
const storaage= multer.memoryStorage();
const uploaad = multer({storage: storaage});

// Set up storage and file filtering for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Appends original file extension
  }
});

const fileFilter = (req, file, cb) => {
  // Accept PDF files only
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only PDF is allowed!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB limit
  fileFilter: fileFilter
});

// API endpoint to handle jobs submissions
app.post('/jobs', upload.single('cv'), (req, res) => {
  const { names, email, profession, phone, message } = req.body;
  const cvPath = req.file ? `/uploads/${req.file.filename}` : null;

  const query = 'INSERT INTO submissions (names, email, profession, phone, message, cv) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(query, [names, email, profession , phone, message, cvPath], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Form submitted successfully' });
  });
});

app.get('/api/cv/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);

  // Send the file to the client
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      return res.status(404).send('File not found');
    }
  });
});


// API endpoint to handle supply submissions

app.post('/supply', upload.single('cv'), (req, res) => {
  const { names, email, services, price, phone, message } = req.body;
  const cvPath = req.file ? `/uploads/${req.file.filename}` : null;

  const query = 'INSERT INTO supply (names, email, services, price, phone, message, cv) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(query, [names, email, services, price, phone, message, cvPath], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Form submitted successfully' });
  });
});

app.get('/api/cv/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);

  // Send the file to the client
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      return res.status(404).send('File not found');
    }
  });
});


// Serve the uploaded files
app.use('/uploads', express.static('uploads'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Register
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword],
        (err, result) => {
            if (err) return res.status(500).send('Server error');
            res.send('User registered');
        }
    );
});

// Login 
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).send('Server error');
        if (results.length === 0) return res.status(404).send('User not found');

        const user = results[0];

        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (!isValidPassword) throw new Error ('Invalid password');

        const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1m' });

        res.json({ token });
    });
});

app.post('/api/reservations', (req, res)=>{
    const {
        accommodationCategory,
        first_name,
        last_name,
        phone_number,
        email,
        checkin_date,
        checkout_date,
        checkin_time,
        checkout_time,
        adults,
        children,
        pets,
        payment_method,
        special_request,
        category_id,
        budget_range_min,
        budget_range_max

        
    } = req.body;
    const sql = `INSERT INTO reservations (accommodationCategory, first_name, last_name, phone_number, email, checkin_date, checkout_date, checkin_time, checkout_time, adults, children, pets, payment_method, special_request, category_id, budget_range_min, budget_range_max)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
                  
                 db.query(sql, [accommodationCategory, first_name, last_name, phone_number, email, checkin_date, checkout_date, checkin_time, checkout_time, adults, children, pets, payment_method, special_request, category_id, budget_range_min, budget_range_max], (err, result) => {
                    if (err) throw err;
                    res.send('Reservation successfully created');
                });
})
//      Api endpoint to get the count of applications
app.get('/api/dashboard/submissions', (req, res) => {
    const sql = 'SELECT COUNT(*) AS count FROM submissions';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

app.get('/api/dashboard/suppliers', (req,res)=>{
  const sql = 'SELECT COUNT(*) AS count FROM suppliers';
  db.query(sql, (err, result) =>{
    if (err) throw err;
    res.json(result[0]);
  });
});

// API endpoint to get the count of subscribers
app.get('/api/dashboard/subscribers', (req, res) => {
    const sql = 'SELECT COUNT(*) AS count FROM subscribers';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

// API endpoint to get the count of messages
app.get('/api/dashboard/messages', (req, res) => {
    const sql = 'SELECT COUNT(*) AS count FROM contact_messages';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result[0]);
    });
});

app.get('/api/dashboard/reservations', (req,res) =>{
    const sql = 'SELECT COUNT(*) AS count FROM reservations';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result[0]);
    });
});

app.get('/api/dashboard/inquiries', (req,res) =>{
    const sql = 'SELECT COUNT(*) AS count FROM inquiries';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result[0]);
    });
});


  // Endpoint to fetch Subscribers data
  app.get('/api/subscribers', (req, res) => {
    db.query('SELECT * FROM subscribers', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // Endpoint to fetch Messages data
  app.get('/api/messages', (req, res) => {
    db.query('SELECT * FROM contact_messages', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

app.post('/api/contact', (req, res) => {
    const { namees, email, phone_number, message } = req.body;

    const sql = 'INSERT INTO contact_messages (namees, email, phone_number, message) VALUES (?, ?, ?, ?)';
    db.query(sql, [namees, email, phone_number, message], (err, result) => {
        if (err) {      
            console.error('Error inserting data:', err);
            res.status(500).send('An error occurred while saving the message.');
            return;
        }
        res.status(201).send('Message saved successfully.');
    });
});

app.post('/api/inquiries', (req, res) => {
    const { namees, email, message } = req.body;

    const sql = 'INSERT INTO inquiries (namees, email, message) VALUES (?, ?, ?)';
    db.query(sql, [namees, email, message], (err, result) => {
        if (err) {      
            console.error('Error inserting data:', err);
            res.status(500).send('An error occurred while saving the message.');
            return;
        }
        res.status(201).send('Message saved successfully.');
    });
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    const query = 'INSERT INTO subscribers (email) VALUES (?)';
    db.query(query, [email], (err) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).send('This email is already subscribed');
            } else {
                return res.status(500).send('Database error');
            }
        }

        // Send confirmation email
        const mailOptions = {
            from: 'your-email@gmail.com', // Replace with your email
            to: email,
            subject: 'Welcome to Our Newsletter!',
            html: `
                <h1>Thank you for subscribing!</h1>
                <p>We're excited to have you on board. Here’s what you can expect:</p>
                <ul>
                    <li>Regular updates about our latest products and services.</li>
                    <li>Exclusive offers and discounts.</li>
                    <li>Insightful articles and news from our industry.</li>
                </ul>
                <p>Visit our website: <a href="https://yourwebsite.com">Your Website</a></p>
                <p>If you have any questions, feel free to reply to this email.</p>
                <p>Best regards,<br>Your Company</p>
            `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).send('Error sending email');
            }
            console.log('Email sent: ' + info.response);
            res.status(200).send('Successfully subscribed and email sent');
        });
    });
});

// Fetch all data table from a single div

app.get('/api/suppliers', (req, res) => {
  const query = 'SELECT * FROM suppliers';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Fetch a single inquiry by ID
app.get('/api/suppliers/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM suppliers WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results[0]);
  });
});


// Fetch all inquiries
app.get('/api/inquiries', (req, res) => {
    const query = 'SELECT * FROM inquiries';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  
  // Fetch a single inquiry by ID
  app.get('/api/inquiries/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM inquiries WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results[0]);
    });
  });
  
  app.get('/api/submissions', (req, res) => {
    const query = 'SELECT * FROM submissions';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  app.get('/api/submissions/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM submissions WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results[0]);
    });
  });

  app.get('/api/subscribers', (req, res) => {
    const query = 'SELECT * FROM subscribers';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  app.get('/api/subscribers/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM subscribers WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results[0]);
    });
  });

  app.get('/api/messages', (req, res) => {
    const query = 'SELECT * FROM contact_messages';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  app.get('/api/messages/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM contact_messages WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results[0]);
    });
  });

  app.get('/api/reservations', (req, res) => {
    const query = 'SELECT * FROM reservations';
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results);
    });
  });
  app.get('/api/reservations/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM reservations WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json(results[0]);
    });
  });


// Fetch all hotels
app.get('/hotels', (req, res) => {
    const query = 'SELECT * FROM hotels';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Fetch available rooms for a specific hotel and dates
app.post('/rooms', (req, res) => {
    const { hotelId, checkIn, checkOut, adults, children } = req.body;
    const query = `
        SELECT * FROM rooms 
        WHERE hotel_id = ? 
        AND capacity >= ? 
        AND status = 'Available' 
        AND id NOT IN (
            SELECT room_id FROM reservations 
            WHERE check_in <= ? AND check_out >= ?
        )`;

    db.query(query, [hotelId, adults + children, checkOut, checkIn], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});


app.get('/api/jobs', (req, res) => {
    const sql = 'SELECT * FROM job_applications ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
});

// Static files (CV uploads)


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});


/*const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'karaporti',
    database: 'enchantingev'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Routes

// Get list of hotels
app.get('/hotels', (req, res) => {
    const query = 'SELECT * FROM hotels';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//Get the details of a single Hotel

// Get details of a single hotel
app.get('/hotels/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM hotels WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      res.json(result[0]);
    });
  });
  
// Check availability
app.post('/check-availability', (req, res) => {
    const { hotelId, checkInDate, checkOutDate, rooms, adults, children } = req.body;
    const query = `
        SELECT * FROM rooms
        WHERE hotel_id = ? AND id NOT IN (
            SELECT room_id FROM bookings
            WHERE check_in_date <= ? AND check_out_date >= ?
        )
        LIMIT ?`;

    db.query(query, [hotelId, checkOutDate, checkInDate, rooms], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
// Book a room
app.post('/book-room', (req, res) => {
    const { checkInDate, checkOutDate, roomId, adults, children } = req.body;
    const query = `
        INSERT INTO bookings (room_id, check_in_date, check_out_date, adults, children)
        VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [roomId, checkInDate, checkOutDate, adults, children], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Booking successful', bookingId: result.insertId });
    });
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/