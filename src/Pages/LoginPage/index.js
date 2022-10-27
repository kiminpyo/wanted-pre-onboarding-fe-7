import React, { useContext, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { dispatchContext, stateContext } from "../../App";
import { useInput } from "../../hooks/useInput";
const axios = require("axios");
function LoginPage() {
    const { onLogin } = useContext(dispatchContext);
    const data = useContext(stateContext);
    const token = window.localStorage.getItem("token");
    const navigate = useNavigate();
    const id = useInput("");
    const password = useInput("");
    const i = useRef();
    const p = useRef();
    console.log(i.current?.value, p.current?.value);
    const onSubmit = (e) => {
        e.preventDefault();
        onLogin(id.inputValue, password.inputValue);
    };

    if (token) {
        return <Navigate to="/todo" />;
    } else {
        return (
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="login">아이디</label>
                        <input
                            type="id"
                            name="login"
                            value={id.inputValue}
                            onChange={id.onChange}
                            ref={i}
                        />
                    </div>
                    <div>
                        {" "}
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            name="password"
                            value={password.inputValue}
                            onChange={password.onChange}
                            ref={p}
                        />
                    </div>
                    <br />
                    <button type="submit">로그인</button>
                </form>
                if you don't have ? <br />
                <button onClick={() => navigate("/signup")}>회원가입</button>
            </div>
        );
    }
}

export default LoginPage;
