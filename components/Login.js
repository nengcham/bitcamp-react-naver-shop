import React, { useState } from "react"
import Layout from "../containers/Layout"
export default function Login (){
    const [userName, setUserName] = useState(0)
    const [password, setPassword] = useState(0)
    const res = () =>{
        let userName = document.getElementById('userName').value
        let password = document.getElementById('password').value
        setUserName(userName)
        setPassword(password)
    }

    return<Layout><h1>Login Form</h1>
        <div>
            <label><b>Username </b></label><br />
            <input id = 'userName' /><br />
            <label><b>Password </b></label><br />
            <input id = 'password' /><br />
            <button onClick={()=>res()}>Login</button><br />
            <div>아이디: {userName}, 비밀번호: {password}</div>
            <label>
                <input type="checkbox" /> Remember me
            </label>
        </div>
        <div>
            <button type="">Cancel</button><br />
            <span>Forgot <a href="#">password?</a></span>
        </div>
    </Layout>
}
