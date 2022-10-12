import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { useInput } from "../../hooks/useInput";

function LoginPage() {
    const token = window.localStorage.getItem("token");

    const navigate = useNavigate();
    const id = useInput("");
    const password = useInput("");

    const onSubmit = (e) => {
        e.preventDefault();
        const fetchLogin = async () => {
            try {
                const request = await axios.post(`${BASE_URL}/auth/signin`, {
                    email: id.inputValue,
                    password: password.inputValue,
                });
                window.localStorage.setItem("token", request.data.access_token);
                navigate("/todo");
            } catch (err) {
                console.error(err);
            }
        };

        fetchLogin();
    };
    if (token) {
        return <Navigate to='/todo' />;
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='id'
                    name='login'
                    value={id.inputValue}
                    onChange={id.onChange}
                />
                <label htmlFor='login'>아이디</label>
                <input
                    type='password'
                    name='password'
                    value={password.inputValue}
                    onChange={password.onChange}
                />
                <label htmlFor='password'>비밀번호</label>
                <button type='submit'>로그인</button>
            </form>
            <button onClick={() => navigate("/signup")}>회원가입</button>
        </div>
    );
}

export default LoginPage;
