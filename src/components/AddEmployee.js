import React, { useState } from 'react';
import { createEmployee } from '../api';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [line1, setLine1] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submissionMessage, setSubmissionMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const employee = {
            name,
            address: {
                line1,
                city,
                country,
                zip_code: zipCode
            },
            contact_methods: {
                EMAIL: email,
                PHONE: phone
            }
        };

        try {
            await createEmployee(employee);
            setSubmissionMessage('Employee Listed successfully!');
            setName('');
            setLine1('');
            setCity('');
            setCountry('');
            setZipCode('');
            setEmail('');
            setPhone('');
        } catch (error) {
            setSubmissionMessage('Failed to create employee: ' + error.message);
        }
    };

    return (
        <div className="employee-detail-container">
            <form onSubmit={handleSubmit}>
                <h1>Add Employee</h1>
                {submissionMessage && <div className="success-message">{submissionMessage}</div>}
                <div className="form-item">
                    <div className="employee-detail-key">Name:</div>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <h2>Address</h2>
                <div className="form-item">
                    <div className="employee-detail-key"> Line 1:</div>
                    <input type="text" value={line1} onChange={(e) => setLine1(e.target.value)} required />
                </div>
                <div className="form-item">
                    <div className="employee-detail-key">City:</div>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>
                <div className="form-item">
                    <div className="employee-detail-key">Country:</div>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
                </div>
                <div className="form-item">
                    <div className="employee-detail-key">ZIP Code:</div>
                    <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                </div>
                <h2>Contact Methods</h2>
                <div className="form-item">
                    <div className="employee-detail-key">Email:</div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-item">
                    <div className="employee-detail-key">Phone:</div>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
