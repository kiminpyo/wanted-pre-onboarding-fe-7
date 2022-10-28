import React, { useCallback, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { dispatchContext, stateContext } from "../../App";
import { useInput } from "../../hooks/useInput";

function LoginPage() {
    const { onLogin } = useContext(dispatchContext);
    const data = useContext(stateContext);
    console.log(data);
    const token = window.localStorage.getItem("token");
    const navigate = useNavigate();
    const id = useInput("");
    const password = useInput("");

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        onLogin(id.inputValue, password.inputValue);
    });

    if (token) {
        return <Navigate to="/todo" />;
    } else {
        return (
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="login">아이디</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={id.inputValue}
                            onChange={id.onChange}
                        />
                    </div>
                    <div>
                        {" "}
                        <label htmlFor="password">비밀번호</label>
                        <input
                            required
                            type="password"
                            name="password"
                            value={password.inputValue}
                            onChange={password.onChange}
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
