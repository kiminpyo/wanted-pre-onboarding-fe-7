import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SingupPage";
function App() {
    const token = window.localStorage.getItem("token");
   
    const [user,setUser] = useState(token || "");

    if (user) {
        return (
            <div className='App'>
                <Routes>

                    <Route index path='/todo' element={<MainPage  setUser={setUser}/>} />
                </Routes>
            </div>
        );
    }
    return (
        <div className='App'>
            <Routes>
                <Route path='/login' element={<LoginPage  setUser={setUser}/>} />
                <Route path='/signup' element={<SignupPage />} />
            </Routes>
        </div>
    );
}

export default App;
