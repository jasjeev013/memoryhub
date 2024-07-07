const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const connectDB = require('./db');
const itemRoutes = require('./routes/items');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
const corsOptions = {
  origin: 'https://memoryhub.vercel.app', // Allow requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions)); 

// Connect to MongoDB
mongoose.connect("mongodb+srv://jasjeev:jasjeev123@cluster0.6cm268c.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));


// Routes
app.use('/items', itemRoutes);


app.use('/', (req, res) => {
  res.send("Bello");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
