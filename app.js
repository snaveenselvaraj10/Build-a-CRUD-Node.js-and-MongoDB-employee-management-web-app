const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/employeedb';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Connection error', error);
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const departmentRoutes = require('./routes/department');
const employeeRoutes = require('./routes/employee');

app.use('/departments', departmentRoutes);
app.use('/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
