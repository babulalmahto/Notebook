import { useState } from 'react';
import './style.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "./logo.jpg";
const INITIAL_VALUE = {
    username : "",
    password : ""
}
const Login = () => {
    const [userData,setUserData] = useState(INITIAL_VALUE)
    const navigate = useNavigate();
    const onChangeHandler = ({target : {name,value}}) => {
        setUserData({...userData,[name] : value})

    }
    return <div className="login-container">
        <div>
            <img src={logo} alt="logo.jpg" width="450px" height="500px" ></img>
            {/*<pre>{JSON.stringify(userData)}</pre>*/}
        </div>
        <div className='login-input-container'>
            <h1>Log-in-:</h1>
            <div className='input-field'>
                <label>User name</label><br/>
                <input type='text' name="username" value={userData.username} onChange={onChangeHandler}/>
            </div>
            <div className='input-field'>
                <label>Password</label><br/>
                <input type='password' name="password" value={userData.password} onChange={onChangeHandler}/>
            </div>
            <div class="btn-login">
                <button type="submit">LOG IN</button>
            </div>
            <div>
                <p>if you dont have account?<span onClick={() => navigate('/sign-up')}><strong>Sign Up</strong></span></p>
            </div>
        </div>
    </div>
}

export default Login;