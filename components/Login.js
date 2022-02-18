import React, { useState } from "react"
import Layout from "../containers/Layout"
export default function Login (){
    const [userName, setUserName] = useState(0)
    const [password, setPassword] = useState(0)

    return<Layout><h1>Login Form</h1>
    <form>
        <div>
            <label><b>Username </b></label><br />
            <input type="text" /><br />
            <label><b>Password </b></label><br />
            <input type="text" /><br />
            <button type="">Login</button><br />
            <label>
                <input type="checkbox" /> Remember me
            </label>
        </div>
        <div>
            <button type="">Cancel</button><br />
            <span>Forgot <a href="#">password?</a></span>
        </div>
    </form>
    </Layout>
}
