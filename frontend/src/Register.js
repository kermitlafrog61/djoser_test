import React, { useState } from "react";
import AuthService from './AuthService';

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();

        AuthService.register({ username, email, password }).then(
            () => {
                // Redirect to a specific page or do something else
                setError(null); // clear any previous errors
            },
            (error) => {
                // If an error response is returned from the API
                // it's often in the response.data object, but this can depend on your backend setup
                setError(error.response.data);
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
                Email:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button onClick={handleRegister}>Register</button>
            {error && <div>{JSON.stringify(error)}</div>}
        </div>
    );
}

export default Register;
