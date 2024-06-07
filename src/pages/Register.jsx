import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import BackButtonLogin from "../components/BackButtonLogin"

const Register = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        method: "post"
    })
    const navigate = useNavigate()

    const registerUser = async (e) => {
        e.preventDefault()
        if (data.name == '' || data.email == '' || data.password == '') {
            return toast.error('You need to fill in all the blank boxes')
        }
        axios.post("http://backend-client-management.000webhostapp.com/backend/users.php", data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then(res => {
                const check = res.data.status
                if (check == 1) {
                    toast.success('Register Successful.')
                    setData({})
                    navigate('/login')
                } else if (check == 0) {
                    toast.error("Wrong data.")
                }
            })
            .catch((error) => console.log(error))
    }


    return (
        <div className="flex justify-center items-center h-screen bg-indigo-300">
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <BackButtonLogin />
                <h1 className="text-3xl block text-center font-semibold">Register</h1>
                <label className="block text-base mb-2">Name</label>
                <input type="text" placeholder="enter name ..."
                    value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
                <label className="block text-base mb-2 mt-5">Email</label>
                <input type="email" placeholder="enter email ..."
                    value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
                <label className="block text-base mb-2 mt-5">Password</label>
                <input type="password" placeholder="enter password ..."
                    value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
                <button onClick={registerUser} className="mt-5 border-indigo-700 bg-indigo-700 text-white px-5 py-1 w-full
           rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Register</button>
            </div>
        </div>
    )
}

export default Register