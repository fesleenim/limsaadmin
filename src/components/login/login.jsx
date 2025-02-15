import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

function LoginPage() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            navigate('/admin'); // Agar token bo'lsa, admin panelga o'tadi
        }
    }, [navigate]);

    const Login = () => {
        const formData = new FormData();
        formData.append('phone_number', phone);
        formData.append('password', password);

        axios({
            url: 'https://realauto.limsa.uz/api/auth/signin',
            method: 'POST',
            data: formData,
        }).then(res => {
            localStorage.setItem('accessToken', res?.data?.data?.tokens?.accessToken?.token)
            navigate('/admin')
        }).catch(err => {
            console.log(err);
            alert('Login yoki parol noto‘g‘ri!');
        });
    };

    return (
        <form className="wrapper">
            <h2>LOGIN</h2>
            <section className="group">
                <input type="text" size="30" className="input" name="tel" required onChange={(e) => setPhone(e?.target?.value)} />
                <label htmlFor="tel" className="label">Phone Number </label>
            </section>
            <section className="group">
                <input type="password" minLength="8" className="input" name="password" required onChange={(e) => setPassword(e?.target?.value)} />
                <label htmlFor="password" className="label">Password</label>
            </section>
            <button type="button" className="btn" onClick={Login}>LOGIN</button>
            <span className="footer"></span>
        </form>
    );
}

export default LoginPage;
