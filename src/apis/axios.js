import axiosInstance from "./intercepter";

export const Signup = (data) =>
    axiosInstance({ method: "POST", url: "/auth/signup", data });

export const Signin = (data) =>
    axiosInstance({ method: "POST", url: "/auth/signin", data });

export const createTodo = (data) => {
    console.log(data);
    return axiosInstance({ method: "POST", url: "/todos", data });
};

export const updateTodo = (id, data) =>
    axiosInstance({ method: "PUT", url: `/todos/${id}`, data });

export const deleteTodo = (id) =>
    axiosInstance({ method: "DELETE", url: `/todos/${id}` });

export const getTodo = () => axiosInstance({ method: "GET", url: "/todos" });
