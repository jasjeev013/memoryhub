const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const itemRoutes = require('./routes/items');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/items', itemRoutes);


app.use('/', (req, res) => {
  res.send("Bello");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
