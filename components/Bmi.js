import React, { useState } from "react"
import Layout from "../containers/Layout"
import axios from "axios"

export default function Bmi(){
    const [inputs, setInputs] = useState({})
    const {name, weight, height} = inputs; // Object Destructuring

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]: value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, height, weight}
        alert(`사용자이름: ${JSON.stringify(bmiRequest)}`)

        // try{
        //     axios.get(`http://localhost:8080/member/bmi`)
        //     .then((res)=>{
        //         alert(`답장이 도착했습니다 [내용]${res.data}`)
        //     })
        // }catch(error){
        //     alert(`에러가 발생했습니다 [내용] ${error}`)
        // }
    }

    return <Layout>
    <form action=""></form>
    <h1>BMI폼</h1>
    <label htmlFor=""><b>Name: </b></label>
    <input type="text" name="name" onChange={handleChange} /><br />
    <label htmlFor=""><b>Height(cm): </b></label>
    <input type="text" name="height" onChange={handleChange} /><br />
    <label htmlFor=""><b>Weight(kg) : </b></label>
    <input type="text" name="weight" onChange={handleChange}/><br />
    <button onClick={handleClick}>BMI 체크</button>
        
    </Layout>
}

