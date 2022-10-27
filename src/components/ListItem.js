import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { axiosInstance } from "../apis/axios";
import { BASE_URL } from "../config";
import { useDebounce } from "../hooks/useDebounce";
import { useInput } from "../hooks/useInput";
import { useThrottle } from "../hooks/useThrottling";

const ListItem = ({ todoData, setTodoData, id, userId, isCompleted, todo }) => {
    const token = window.localStorage.getItem("token");
    const value = useInput(todo);
    const [edit, setEdit] = useState(false);
    const [complete, setComplete] = useState(isCompleted);

    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const debounceComplete = useDebounce(complete, 2000);

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log("타임아웃 안");
            const request = axios.put(`${BASE_URL}/todos/${id}`, {
                todo: value.inputValue,
                isCompleted: complete,
            });
            setComplete((prev) => !prev);
        }, 2000);

        return () => clearInterval(timerId);
    }, [debounceComplete]);
    const EditHandler = (e) => {
        e.preventDefault();
        try {
            // const editTodoData = async () => {
            //     console.log("타임아웃 안");
            //     const request = await axios.put(`${BASE_URL}/todos/${id}`, {
            //         todo: value.inputValue,
            //         isCompleted: complete,
            //     });
            // };
            setEdit(false);
            // editTodoData();
            let newTodoData = todoData.map((item) => {
                if (item.id === id) {
                    item.todo = value.inputValue;
                    item.isCompleted = complete;
                }
                return item;
            });
            setTodoData(newTodoData);
        } catch (err) {
            console.error(err);
        }
    };
    const checked = (e) => {
        setComplete((prev) => !prev);
    };
    const deleteHandler = (e) => {
        e.preventDefault();
        const deleteTodaData = async () => {
            try {
                console.log(id);
                const request = await axios.delete(
                    `${BASE_URL}/todos/${id}`,
                    {}
                );
                let newTodoData = todoData.filter((item) => item.id !== id);
                setTodoData(newTodoData);
            } catch (err) {
                console.error(err);
            }
        };
        deleteTodaData();
    };
    if (edit) {
        return (
            <div>
                <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>{id}</div>
                    <div> {userId}</div>
                    <form onSubmit={EditHandler}>
                        <input
                            type="text"
                            value={value.inputValue}
                            onChange={value.onChange}
                        />
                        <input
                            type="checkbox"
                            name="완료"
                            checked={complete}
                            readOnly
                            onClick={(e) => checked(e)}
                        />

                        <button type="submit">저장</button>
                    </form>
                    <button onClick={() => setEdit(false)}>취소</button>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <div>{id}</div>

                    <div> {userId}</div>
                    <div>{todo}</div>
                    <div>{isCompleted ? "했다" : "안했다 "}</div>
                    <button onClick={() => setEdit(true)}>업데이트</button>
                    <form onSubmit={deleteHandler}>
                        <button type="submit">삭제</button>
                    </form>
                </div>
            </div>
        );
    }
};

export default ListItem;
