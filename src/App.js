import "./App.css";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import {
    createContext,
    Suspense,
    useEffect,
    useReducer,
    useState,
} from "react";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SingupPage";
import Spinner from "./components/Spinner";
import NoMatch from "./Pages/404Page";
import reducer from "./reducer/login";
import axios from "axios";
import { BASE_URL } from "./config";
import { FAILURE, LOADING, SUCCESS } from "./action/type";
import { Signin } from "./apis/axios";

export const stateContext = createContext();
export const dispatchContext = createContext();
function App() {
    const [data, dispatch] = useReducer(reducer, []);

    const onLogin = (email, password) => {
        const fetchUser = async () => {
            dispatch({ type: LOADING });
            try {
                const request = await Signin({ email, password });
                dispatch({ type: SUCCESS, payload: request.data });
            } catch (err) {
                dispatch({ type: FAILURE, payload: err });
            }
        };
        fetchUser();
    };

    return (
        <stateContext.Provider value={data}>
            <dispatchContext.Provider
                value={{
                    onLogin,
                }}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            index
                            path="/"
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <LoginPage />{" "}
                                </Suspense>
                            }
                        />

                        <Route
                            path="/todo"
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <MainPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <Suspense fallback={<Spinner />}>
                                    <SignupPage />
                                </Suspense>
                            }
                        />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </BrowserRouter>
            </dispatchContext.Provider>
        </stateContext.Provider>
    );
}

export default App;
