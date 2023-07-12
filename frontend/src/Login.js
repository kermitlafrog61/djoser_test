import React, { useState } from "react";
import AuthService from './AuthService';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService.login({username, password}).then(
            () => {
                // Redirect to a specific page or do something else
            },
            (error) => {
                // Handle error
            }
        );
    };

    return (
        <div>
            <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
