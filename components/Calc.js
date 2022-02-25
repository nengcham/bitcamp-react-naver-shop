import React, { useState } from "react"
import { memberCalc } from "../api"
import Layout from "../containers/Layout"

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState("")
    const {num1, num2, opcode} = inputs

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        memberCalc({num1, num2, opcode})
        .then(res => setResult(res.data))
        .catch(err => console.log(`에러발생: ${err}`))  
    }

    return <Layout>
        <h1>Calculator</h1>
        <form action="">
        <label><b>Num1</b></label>
        <input type="text" name="num1" onChange={handleChange}/><br />

        <label><b>Opcode</b></label>
        <select type="text" name="opcode" onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select>
        <br />
        <label><b>Num2</b></label>
        <input type="text" name="num2" onChange={handleChange}/><br />
        <button onClick={handleClick}>계산!</button>
        </form>
        <div>결과: {result}</div>
        
    </Layout>
}
