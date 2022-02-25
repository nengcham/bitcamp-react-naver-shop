import React, { useState } from "react"
import Layout from "../containers/Layout"
import {memberBmi} from "../api/index"


export default function Bmi(){
    const [inputs, setInputs] = useState({})
    const {name, weight, height} = inputs // Object Destructuring
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
        memberBmi({name, height, weight})
        .then (res => setResult(res.data))
        .catch(err => console.log(`에러발생: ${err}`))
    }

    return <Layout>
    <form action="">
    <h1>BMI폼</h1>
    <label htmlFor=""><b>Name: </b></label>
    <input type="text" name="name" onChange={handleChange} /><br />
    <label htmlFor=""><b>Height(cm): </b></label>
    <input type="text" name="height" onChange={handleChange} /><br />
    <label htmlFor=""><b>Weight(kg) : </b></label>
    <input type="text" name="weight" onChange={handleChange}/><br />
    <button onClick={handleClick}>BMI 체크</button>
    </form> 
    <div>결과 : {result}</div>
    </Layout>
}

