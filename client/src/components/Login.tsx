import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface LoginProps {
    onLogin?: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       navigate('/register'); // Navigate to the register page
    };

    return (
        <form onSubmit={handleSubmit} style={{ width: 220, margin: '2rem auto' }}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                style={{ width: '100%', marginBottom: 8, padding: 6 }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: '100%', marginBottom: 8, padding: 6 }}
            />
            <button type="submit" style={{ width: '100%', padding: 6 }}>
                Login
            </button>
        </form>
    );
};

export default Login;
