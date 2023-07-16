import { Inter } from 'next/font/google'
import {  useState } from 'react'
import API from '../config/axios.config'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const router = useRouter()

   const handleLogin = async () => {
    try {
        const res = await  API.post("/auth/login", {username: email, password: password})
        if(res.status === 201){
            localStorage.setItem("token", res.data.access_token)
            router.replace("/view")
        }
        console.log(res)
    } catch (error) {
            console.log(error)
    }
   }


    return(
        <div className="d-flex justify-content-center  align-items-center" style={{ height: "100vh"}}>
        <div  style={{ width: '500px' }} className="shadow p-5">

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">Email address</label>
            <input onChange={(e) =>  setEmail(e.target.value)} required type="email" id="form2Example1" className="form-control" />
        </div>

        <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">Password</label>
            <input onChange={(e) =>  setPassword(e.target.value)} required type="password" id="form2Example2" className="form-control" />
        </div>
        <button onClick={handleLogin} type="button" className="btn btn-primary btn-block mb-4">Log in</button>


        </div>
        </div>
    )

}