import React, { useState } from "react"
import Layout from "../containers/Layout"

export default function Bmi(){
    const [userName, setUserName] = useState(0)
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)

    return <Layout><h1>BMI</h1>
    <form action="">
    <label htmlFor=""><b>UserName: </b></label>
    <input type="text" /><br />
    <label htmlFor=""><b>Height(cm): </b></label>
    <input type="text" /><br />
    <label htmlFor=""><b>Weight(kg) : </b></label>
    <input type="text" /><br />
    <button>Cheak</button>
    </form>
    
    </Layout>
}
