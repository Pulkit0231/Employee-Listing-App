import React, { useEffect, useState } from 'react';
import { getEmployee } from '../api';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetails = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployee();
    },);

    const fetchEmployee = async () => {
        const response = await getEmployee(id);
        setEmployee(response.data);
        console.log(response.data)
    };

    if (!employee) {
        return <p>Loading...</p>;
    }

    return (
        <div className='employee-detail-container'>
            <h1>Employee Details</h1>
            {employee ? (
                <div className="employee-detail">
                    <div>
                        <label>Name:</label>
                        <span>{employee.name}</span>
                    </div>
                    <div>
                        <label>Employee ID:</label>
                        <span>{employee._id}</span>
                    </div>
                    <div>
                        <label>Address Line 1:</label>
                        <span>{employee.address.line1}</span>
                    </div>
                    <div>
                        <label>City:</label>
                        <span>{employee.address.city}</span>
                    </div>
                    <div>
                        <label>Country:</label>
                        <span>{employee.address.country}</span>
                    </div>
                    <div>
                        <label>ZIP Code:</label>
                        <span>{employee.address.zip_code}</span>
                    </div>
                    <div>
                        <label>Email:</label>
                        <span>{employee.contact_methods.EMAIL}</span>
                    </div>
                    <div>
                        <label>Phone:</label>
                        <span>{employee.contact_methods.PHONE}</span>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button className="button" onClick={() => navigate("/")}>
                Back
            </button>

        </div>
    );
};

export default EmployeeDetails;
