import React, { useState } from "react"
import Layout from "../containers/Layout"

export default function Grade(){
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, kor, eng, math}
        alert(`결과: ${JSON.stringify(bmiRequest)}`)
    }
    // const [userName, setUserName] = useState("")
    // const [kor, setKor] = useState(0)
    // const [eng, setEng] = useState(0)
    // const [math, setMath] = useState(0)
    // const res = () =>{
    //     let userName = document.getElementById('userName').value
    //     let kor = document.getElementById('kor').value
    //     let eng = document.getElementById('eng').value
    //     let math = document.getElementById('math').value
    //     setUserName(userName)
    //     setKor(kor)
    //     setEng(eng)
    //     setMath(math)
    // }

    return <Layout><h1>Grade</h1>
        <form>
        <label htmlFor=""><b>이름 : </b></label>
        <input type="text" name="name" onChange={handleChange}/><br />
        <label htmlFor=""><b>국어 : </b></label>
        <input type="text" name="kor" onChange={handleChange}/><br />
        <label htmlFor=""><b>영어 : </b></label>
        <input type="text" name="eng" onChange={handleChange} /><br />
        <label htmlFor=""><b>수학 : </b></label>
        <input type="text" name="math" onChange={handleChange} /><br />
        <button onClick={handleClick}>Cheak</button>
        <div>이름: {name}, 국어: {kor}, 영어: {eng}, 수학: {math}</div>
        </form>
    </Layout>
}
