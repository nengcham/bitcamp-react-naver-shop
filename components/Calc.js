import React, { useState } from "react"
import Layout from "../containers/Layout"
export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [result, setResult] = useState(0)
    const sum = () =>{
        return setResult(Number(num1) + Number(num2))
    }


    return <Layout><h1>Calculator</h1>
        <div>
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
        <button onClick={()=>{setNum1(document.getElementById("num1").value)}}>숫자1 결정</button>
        <button onClick={()=>{setNum2(document.getElementById("num2").value)}}>숫자2 결정</button>
        <button onClick={()=>{sum()}}>더하기 실행</button>
        <div>결과: {num1} {opcode} {num2} = {result}</div>
        </div>
    </Layout>
}
