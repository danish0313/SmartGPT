import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle registration logic here
        navigate('/');
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '0 auto' }}>
            <h2>Register</h2>
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;