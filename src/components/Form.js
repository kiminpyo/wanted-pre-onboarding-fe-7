import axios from "axios";
import { memo } from "react";
import { createTodo } from "../apis/axios";
import { BASE_URL } from "../config";
import { useInput } from "../hooks/useInput";

const Form = ({ todoData, setTodoData }) => {
    const content = useInput("");

    const submitTodo = (e) => {
        const fetchTodoData = async () => {
            try {
                const result = await createTodo({ todo: content.inputValue });
                setTodoData(() => [...todoData, result.data]);
                content.setInputValue("");
            } catch (err) {
                console.error(err);
            }
        };
        fetchTodoData();
        e.preventDefault();
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
