import axios from "axios";
import React, {
    memo,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { deleteTodo, updateTodo } from "../apis/axios";
import { useInput } from "../hooks/useInput";

const ListItem = memo(
    ({ todoData, setTodoData, id, userId, isCompleted, todo }) => {
        const value = useInput(todo);
        const [edit, setEdit] = useState(false);
        const [complete, setComplete] = useState(isCompleted);

        const EditHandler = useCallback(
            (e) => {
                e.preventDefault();
                try {
                    const editTodoData = async () => {
                        const request = await updateTodo(id, {
                            todo: value.inputValue,
                            isCompleted: complete,
                        });
                    };
                    editTodoData();
                    setEdit(false);
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
            },
            [todoData, edit, complete]
        );
        const checked = useCallback(
            (e) => {
                console.log(e);
                setComplete(() => e.target.checked);
            },
            [complete]
        );
        const deleteHandler = useCallback(
            (e) => {
                e.preventDefault();
                const deleteTodaData = async () => {
                    try {
                        console.log(id);
                        const request = await deleteTodo(id);
                        let newTodoData = todoData.filter(
                            (item) => item.id !== id
                        );
                        setTodoData(newTodoData);
                    } catch (err) {
                        console.error(err);
                    }
                };
                deleteTodaData();
            },
            [todoData]
        );
        if (edit) {
            return (
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}>
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
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}>
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
    }
);

export default ListItem;
