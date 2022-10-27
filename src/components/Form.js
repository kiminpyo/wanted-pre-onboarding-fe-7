import axios from "axios";
import React from "react";
import { BASE_URL } from "../config";
import { useInput } from "../hooks/useInput";

const Form = ({ todoData, setTodoData }) => {
    const token = window.localStorage.getItem("token");
    const content = useInput("");

    const submitTodo = (e) => {
        e.preventDefault();
        const fetchTodoData = async () => {
            try {
                const result = await axios.post(`${BASE_URL}/todos`, {
                    todo: content.inputValue,
                });
                content.setInputValue("");
                setTodoData(() => [...todoData, result.data]);
            } catch (err) {
                console.error(err);
            }
        };
        fetchTodoData();
    };
    return (
        <div>
            <form onSubmit={submitTodo}>
                <input
                    type="text"
                    value={content.inputValue}
                    onChange={content.onChange}
                />
                <button type="submit">입력</button>
            </form>
        </div>
    );
};

export default Form;
