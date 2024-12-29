const express = require('express');
require('dotenv').config();
const connectDB = require('./database/db'); 
const authRoutes = require('./Routes/authRoutes'); // Fixed capitalization (conventionally "routes")
const attendanceRoutes = require('./Routes/attendanceRoutes')
const app = express();
const PORT = 3000;


app.use(express.json()); 


connectDB()
  
app.get('/', (req, res) => {
  res.send('Hello server');
});


app.use('/api/auth', authRoutes);
app.use('/api/attendance', attendanceRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
