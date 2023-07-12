import axios from './api';
import jwt_decode from 'jwt-decode';

class AuthService {
    login(user) {
        return axios
            .post("/auth/jwt/create/", {
                username: user.username,
                password: user.password
            })
            .then(response => {
                if (response.data.access) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    return jwt_decode(response.data.access);
                }
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(user) {
        return axios.post("/auth/users/", {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }

    activate(uid, token) {
        return axios.post("/auth/users/activation/", {
            uid: uid,
            token: token
        });
    }
}

export default new AuthService();
