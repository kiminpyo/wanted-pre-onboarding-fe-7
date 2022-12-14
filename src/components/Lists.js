import React, { memo } from "react";
import ListItem from "./ListItem";

const Lists = memo(({ todoData, setTodoData }) => {
    if (todoData.length < 1) {
        return <div>내용이 없음 </div>;
    } else {
        return (
            <div>
                {todoData.map((item, i) => (
                    <ListItem
                        key={item.id}
                        todoData={todoData}
                        id={item.id}
                        isCompleted={item.isCompleted}
                        todo={item.todo}
                        userId={item.userId}
                        setTodoData={setTodoData}
                    />
                ))}
            </div>
        );
    }
});

export default Lists;
