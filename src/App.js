import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SingupPage";
function App() {
    const token = window.localStorage.getItem("token");
    
    return (
        <div className='App'>
            <Routes>
                <Route index path='/' element={<LoginPage />} />
                <Route path='/todo' element={<MainPage />} />
                <Route path='/signup' element={<SignupPage />} />
            </Routes>
        </div>
    );
}

export default App;
