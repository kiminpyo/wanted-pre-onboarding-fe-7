import React from "react";
import ListItem from "./ListItem";

const Lists = ({ todoData, setTodoData }) => {
    console.log(todoData);
    if (todoData.length < 1) {
        return <div>데이터 빔 </div>;
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
};

export default Lists;
