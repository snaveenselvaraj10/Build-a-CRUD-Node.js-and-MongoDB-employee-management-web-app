document.getElementById('employeeForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const birthDate = document.getElementById('birthDate').value;
    const departmentId = document.getElementById('departmentId').value;

    const response = await fetch('/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, surname, birthDate, departmentId })
    });

    if (response.ok) {
        alert('Employee added successfully');
    } else {
        alert('Error adding employee');
    }
});
