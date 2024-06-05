/*const mongoose = require('mongoose');
const Department = require('./models/department');
const Employee = require('./models/employee');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/employeedb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('Connected to MongoDB');

    try {
        // Create sample departments
        const hrDepartment = new Department({
            name: 'Human Resources',
            description: 'Handles recruitment and employee relations'
        });

        const itDepartment = new Department({
            name: 'Information Technology',
            description: 'Handles IT infrastructure and development'
        });

        const savedHRDepartment = await hrDepartment.save();
        const savedITDepartment = await itDepartment.save();

        // Create sample employees
        const employee1 = new Employee({
            name: 'John',
            surname: 'Doe',
            birthDate: '1990-01-01',
            departmentId: savedHRDepartment._id
        });

        const employee2 = new Employee({
            name: 'Jane',
            surname: 'Smith',
            birthDate: '1985-05-15',
            departmentId: savedITDepartment._id
        });

        await employee1.save();
        await employee2.save();

        console.log('Sample data inserted successfully');
    } catch (error) {
        console.error('Error inserting sample data', error);
    } finally {
        // Close the connection
        mongoose.connection.close();
    }
}).catch((error) => {
    console.error('Connection error', error);
});
*/