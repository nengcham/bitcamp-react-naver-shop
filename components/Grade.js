import React, { useState } from "react"
import Layout from "../containers/Layout"

export default function Grade(){
    const [userName, setUserName] = useState("")
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)
    const res = () =>{
        let userName = document.getElementById('userName').value
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setUserName(userName)
        setKor(kor)
        setEng(eng)
        setMath(math)
    }

    return <Layout><h1>Grade</h1>
        <div>
        <label htmlFor=""><b>이름 : </b></label>
        <input id = 'userName'/><br />
        <label htmlFor=""><b>국어 : </b></label>
        <input id = 'kor'/><br />
        <label htmlFor=""><b>영어 : </b></label>
        <input id = 'eng' /><br />
        <label htmlFor=""><b>수학 : </b></label>
        <input id = 'math' /><br />
        <button onClick={()=>res()}>Cheak</button>
        <div>이름: {userName}, 국어: {kor}, 영어: {eng}, 수학: {math}</div>
        </div>
    </Layout>
}
