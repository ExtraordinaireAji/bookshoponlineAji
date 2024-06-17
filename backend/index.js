const express = require('express');
const connectDB = require('../backend/database/db')
const studentRoute = require('../backend/routes/bookRoute')
const cors = require('cors');


const app = express();
const port = 4050

const corsOptions = {
    origin: 'http://localhost:5173', // replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use(studentRoute)





connectDB()








app.listen(port, (req, res) => {
    console.log(`Server is listening to port ${port}`);
})