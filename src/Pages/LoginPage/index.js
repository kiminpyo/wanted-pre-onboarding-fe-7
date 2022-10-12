import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import { useInput } from "../../hooks/useInput";

function LoginPage({user,setUser}) {

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

                setUser(request.data.access_token)
                navigate('/todo')
            } catch (err) {
                console.error(err);
            }

        };

        fetchLogin();
    };
  
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='login'
                    value={id.inputValue}
                    onChange={id.onChange}
                />
                <label htmlFor='login'>아이디</label>
                <input
                    type='text'
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
