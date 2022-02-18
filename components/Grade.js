import React, { useState } from "react"
import Layout from "../containers/Layout"
export default function Grade(){
    const [userName, setUserName] = useState(0)
    const [kor, setKor] = useState(0)
    const [eng, setEng] = useState(0)
    const [math, setMath] = useState(0)

    return <Layout><h1>Grade</h1>
        <label htmlFor=""><b>이름 : </b></label>
        <input type="text" /><br />
        <label htmlFor=""><b>국어 : </b></label>
        <input type="text" /><br />
        <label htmlFor=""><b>영어 : </b></label>
        <input type="text" /><br />
        <label htmlFor=""><b>수학 : </b></label>
        <input type="text" /><br />
        <button>Cheak</button>
    </Layout>
}
