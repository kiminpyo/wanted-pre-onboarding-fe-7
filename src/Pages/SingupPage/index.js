import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Signup } from "../../apis/axios";
import { BASE_URL } from "../../config";
import { useInput } from "../../hooks/useInput";

function SignupPage(props) {
    const navigate = useNavigate();
    const id = useInput("");
    const password = useInput("");
    const [buttonVisible, setButtonVisible] = useState(false);

    useEffect(() => {
        if (id.inputValue.includes("@") && password.inputValue.length >= 8) {
            setButtonVisible(true);
        } else {
            setButtonVisible(false);
        }
    }, [id, password]);

    const onSubmit = (e) => {
        e.preventDefault();
        const fetchLogin = async () => {
            try {
                const request = await Signup({
                    email: id.inputValue,
                    password: password.inputValue,
                });
                navigate("/");
            } catch (err) {
                console.error(err);
                return alert(err.response.data.message);
            }
        };
        fetchLogin();
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        {" "}
                        <label htmlFor="email">아이디</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={""}
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
                            value={""}
                            onChange={password.onChange}
                        />
                    </div>
                    <br />
                    {buttonVisible ? (
                        <button type="submit">등록</button>
                    ) : (
                        <button disabled type="submit">
                            등록
                        </button>
                    )}
                </form>
                <button onClick={() => navigate(-1)}>뒤로</button>
            </div>
        </div>
    );
}

export default SignupPage;
