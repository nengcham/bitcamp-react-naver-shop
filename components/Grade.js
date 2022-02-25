import React, { useState } from "react"
import { memberGrade } from "../api"
import Layout from "../containers/Layout"

export default function Grade(){
    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs
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
        memberGrade({name, kor, eng, math})
        .then(res => setResult(res.data))
        .catch(err => console.log(`에러발생: ${err}`))
    }

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
        <div>{result}</div>
        </form>
    </Layout>
}
