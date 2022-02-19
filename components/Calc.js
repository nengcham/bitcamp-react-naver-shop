import React, { useState } from "react"
import Layout from "../containers/Layout"
export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [result, setResult] = useState(0)
    const sum = () =>{
        let num1 = document.getElementById("num1").value
        console.log('숫자1: '+ num1)
        let num2 = document.getElementById("num2").value
        console.log('숫자1: '+ num2)
        setNum1(num1)
        setNum2(num2)
        setResult(Number(num1) + Number(num2))
        console.log('결과: '+result)
    }
    return <Layout><h1>Calculator</h1>
        <form action="">
        <label><b>Num1</b></label>
        <input id = "num1" type=""/><br />

        <label><b>Opcode</b></label>
        <select name="" id="opcode">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select>
        <br />
        <label><b>Num2</b></label>
        <input id= "num2"/><br />
        <button onClick={()=>sum()}>더하기 실행</button>
        </form>
        <div>결과: {num1}+{num2}</div>
        
    </Layout>
}
