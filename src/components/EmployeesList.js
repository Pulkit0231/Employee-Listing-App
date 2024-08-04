import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../api';

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data.data);
        console.log(response.data.data)
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };
    const navigateToAddEmployee = () => {
        navigate('/add-employee');
    };

    if (employees.length === 0) {
        return <p>No Employees in the system.</p>;
    }

    return (
        <div>
            <h1 className="employee-list-heading">Employees List</h1>
            <button onClick={navigateToAddEmployee} className="add-employee">
                Add New Employee
            </button>

            <div className="employee">
                {employees.map((employee) => (
                    <div className="employee-card">
                        <div className="employee-card-top">
                            <div className="employee-card-detail">
                                <div className="item-key">Employee ID:</div>
                                <div className="item-value">{employee._id}</div>
                            </div>
                            <div className="employee-card-detail">
                                <div className="item-key">Employee Name:</div>
                                <div className="item-value"> {employee.name}</div>
                            </div>
                        </div>
                        <div className="employee-card-bottom">
                            <button onClick={() => handleDelete(employee._id)}>
                                Delete
                            </button>
                            <button className="employee-list-page">
                                <a href={`/employees/${employee._id}`}>
                                    Details
                                </a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default EmployeesList;
