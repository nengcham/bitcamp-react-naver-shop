import React, { useState } from "react"
import Layout from "../containers/Layout"
export default function Login (){
    const [inputs, setInputs] = useState({})
    const {name, password} = inputs

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, password}
        alert(`결과: ${JSON.stringify(bmiRequest)}`)
    }  

    // const [userName, setUserName] = useState(0)
    // const [password, setPassword] = useState(0)
    // const res = () =>{
    //     let userName = document.getElementById('userName').value
    //     let password = document.getElementById('password').value
    //     setUserName(userName)
    //     setPassword(password)
    // }

    return<Layout><h1>Login Form</h1>
        <div>
            <label><b>Username </b></label><br />
            <input type="text" name="name" onChange={handleChange} /><br />
            <label><b>Password </b></label><br />
            <input type="text" name="password" onChange={handleChange} /><br />
            <button onClick={handleClick}>Login</button><br />
            <div>아이디: {name}, 비밀번호: {password}</div>
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
