const express = require("express");
const dbConnect = require("./dbConnect"); // Import the dbConnect module

// Default route

const app = express(); //creating the application

require("dotenv").config();
// parse requests of content-type -application / json;

// Routes
const authRoutes = require('./routes/auth');
const maintenanceRoutes = require('./routes/maintenance');
const inventoryRoutes = require('./routes/inventory');
const noticeRoutes = require('./routes/notice');

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/notice', noticeRoutes);



app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Laboratory Management System!" });
});


// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
