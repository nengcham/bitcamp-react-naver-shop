import React, { useState } from "react"
import Layout from "../containers/Layout"

export default function Bmi(){
    const [userName, setUserName] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const res = () =>{
        let userName = document.getElementById('userName').value
        let height = document.getElementById('height').value
        let weight = document.getElementById('weight').value
        setUserName(userName)
        setHeight(height)
        setWeight(weight)
    }

    return <Layout><h1>BMI</h1>
    <label htmlFor=""><b>UserName: </b></label>
    <input id = 'userName' /><br />
    <label htmlFor=""><b>Height(cm): </b></label>
    <input id = 'height' /><br />
    <label htmlFor=""><b>Weight(kg) : </b></label>
    <input id = 'weight' /><br />
    <button onClick={()=>res()}>입력</button>
    <div>이름: {userName}, 키(cm):{height} , 몸무게(kg):{weight} </div>
    
    </Layout>
}
