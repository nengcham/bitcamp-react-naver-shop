import React, { useState } from "react"
import { memberLogin } from "../api"
import Layout from "../containers/Layout"

export default function Login (){
    const [inputs, setInputs] = useState({})
    const {id, password} = inputs
    const [result, setResult] = useState("")    

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberLogin({id, password})
        .then(res => setResult(res.data))
        .catch(err => console.log(`에러발생: ${err}`))
    }  

    return<Layout><h1>Login Form</h1>
        <div>
            <label><b>Username </b></label><br />
            <input type="text" name="id" onChange={handleChange} /><br />
            <label><b>Password </b></label><br />
            <input type="text" name="password" onChange={handleChange} /><br />
            <button onClick={handleClick}>확인</button><br />
            <div>{result}</div>
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
