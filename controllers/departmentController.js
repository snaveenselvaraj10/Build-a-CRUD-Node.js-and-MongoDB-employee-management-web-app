const Department = require('../models/department');

exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.json(departments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createDepartment = async (req, res) => {
    const department = new Department(req.body);
    try {
        const savedDepartment = await department.save();
        res.status(201).json(savedDepartment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department == null) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json(department);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department == null) {
            return res.status(404).json({ message: 'Department not found' });
        }

        if (req.body.name != null) {
            department.name = req.body.name;
        }
        if (req.body.description != null) {
            department.description = req.body.description;
        }

        const updatedDepartment = await department.save();
        res.json(updatedDepartment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (department == null) {
            return res.status(404).json({ message: 'Department not found' });
        }

        await department.remove();
        res.json({ message: 'Department deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
