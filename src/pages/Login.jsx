import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import BackButtonLogin from "../components/BackButtonLogin"


const Login = () => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    name: false,
    email: '',
    password: '',
  })

  useEffect(() => {
    const login = localStorage.getItem("login")
    if (login) {
      navigate('/home')
    }
    const loginStatus = localStorage.getItem("loginStatus")
    if (loginStatus) {
      localStorage.clear()
    }
  }, [])

  const loginUser = async (e) => {
    e.preventDefault()

    if (data.email == '' || data.password == '') {
      return toast.error('You need to fill in all the blank boxes')
    }

    axios.post("https://backend-client-management.000webhostapp.com/backend/users.php", data)
      .then(res => {
        console.log(res.data);
        const check = res.data.status
        if (check == 1) {
          toast.success('Login Successful. Welcome!')
          setData({})
          localStorage.setItem("login", true)
          localStorage.setItem("id", res.data.id)
          navigate('/home')
        } else if (check == 0) {
          toast.error("Wrong email or password")
          setData({
            name: false,
            email: '',
            password: '',
          })
        }
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-indigo-300">
        <div className="w-96 p-6 shadow-lg bg-white rounded-md">
          <BackButtonLogin />
          <h1 className="text-3xl block text-center font-semibold">Login</h1>
          <form onSubmit={loginUser}>
            <label className="block text-base mb-2">Email</label>
            <input type="email" placeholder="enter email ..."
              value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
            <label className="block text-base mb-2 mt-5">Password</label>
            <input type="password" placeholder="enter password ..."
              value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
            <button type="submit" className="mt-5 border-indigo-700 bg-indigo-700 text-white px-5 py-1 w-full
           rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login