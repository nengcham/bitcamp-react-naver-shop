import React from "react";
const Login =()=>{
    return<><h1>Login Form</h1>
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
    </>
}
export default Login