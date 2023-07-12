import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AuthService from './AuthService';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function ActivateAccount() {
    let query = useQuery();

    useEffect(() => {
        const uid = query.get('uid');
        const token = query.get('token');
        AuthService.activate(uid, token).then(
            () => {
                // Redirect to a specific page or do something else
            },
            (error) => {
                // Handle error
            }
        )
    }, []); // Dependencies for useEffect should be provided in the second argument array

    return (
        <div>
            <h1>Activate Account</h1>
        </div>
    );
}

export default ActivateAccount;
