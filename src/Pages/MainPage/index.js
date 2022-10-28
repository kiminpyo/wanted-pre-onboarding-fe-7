import React, { memo, useEffect, useState } from "react";
import Form from "../../components/Form";
import Lists from "../../components/Lists";
import { BASE_URL } from "../../config";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getTodo } from "../../apis/axios";

const MainPage = memo(() => {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    const [todoData, setTodoData] = useState([]);
    const logoutHandler = (e) => {
        e.preventDefault();
        window.localStorage.removeItem("token");
        navigate("/");
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getTodo();
                console.log(result);
                setTodoData(result.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    if (!token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <button onClick={logoutHandler}>로그아웃</button>
            <Lists setTodoData={setTodoData} todoData={todoData} />
            <Form setTodoData={setTodoData} todoData={todoData} />
        </div>
    );
});

export default MainPage;
