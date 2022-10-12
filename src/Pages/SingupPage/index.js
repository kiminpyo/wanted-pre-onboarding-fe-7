import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';
import { useInput } from '../../hooks/useInput';

function SignupPage(props) {

    const navigate = useNavigate()
    const id = useInput("");
    const password = useInput("");
    const [buttonVisible, setButtonVisible] = useState(false);

    useEffect(() => {
        if (id.inputValue.includes("@") && password.inputValue.length >= 8) {
            setButtonVisible(true);
        }
    }, [id, password]);

    const onSubmit = (e) => {
        e.preventDefault();
        const fetchLogin = async () => {
            try {
                const request = await axios.post(`${BASE_URL}/auth/signup`, {
                    email: id.inputValue,
                    password: password.inputValue,
                });
              
                navigate('/')
            } catch (err) {
                console.error(err)
                return alert(err.response.data.message)
            }
        };
        fetchLogin();
    }
      
    return (
        <div>
           <div>
            <form onSubmit={onSubmit}>
                <input
                    type='id'
                    name='id'
                    value={id.inputValue}
                    onChange={id.onChange}
                />
                <label htmlFor='id'>아이디</label>
                <input
                    type='password'
                    name='password'
                    value={password.inputValue}
                    onChange={password.onChange}
                />
                <label htmlFor='password'>비밀번호</label>
                {buttonVisible ?  <button  type='submit'>등록</button> : <button disabled type='submit'>등록</button> }
                
            </form>
            <button onClick={()=> window.history.back()}>뒤로</button>
           
        </div>
        </div>
    );
}

export default SignupPage;