import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import Lists from "../../components/Lists";
import { BASE_URL } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function MainPage({setUser}) {
    console.log(process.env)
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    const [todoData, setTodoData] = useState([]);
    const logoutHandler = (e) => {
        e.preventDefault()
        window.localStorage.removeItem("token");
        setUser("")
    };
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const result = await axios.get(`${BASE_URL}/todos`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTodoData(result.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={logoutHandler}>
                <button type='submit'>로그아웃</button>
            </form>
            <Lists setTodoData={setTodoData} todoData={todoData} />
            <Form setTodoData={setTodoData} todoData={todoData} />
        </div>
    );
}

export default MainPage;
