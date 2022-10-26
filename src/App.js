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
export const stateContext = createContext();
export const dispatchContext = createContext();

function App() {
    const token = window.localStorage.getItem("token");
    const [loginData, dispatch] = useReducer(reducer, []);

    return (
        <stateContext.Provider value={loginData}>
            <dispatchContext.Provider value={dispatch}>
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
