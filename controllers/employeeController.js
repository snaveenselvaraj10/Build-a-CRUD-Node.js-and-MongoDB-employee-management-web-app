const Employee = require('../models/employee');

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('departmentId');
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    try {
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('departmentId');
        if (employee == null) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        if (req.body.name != null) {
            employee.name = req.body.name;
        }
        if (req.body.surname != null) {
            employee.surname = req.body.surname;
        }
        if (req.body.birthDate != null) {
            employee.birthDate = req.body.birthDate;
        }
        if (req.body.departmentId != null) {
            employee.departmentId = req.body.departmentId;
        }

        const updatedEmployee = await employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        await employee.remove();
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
