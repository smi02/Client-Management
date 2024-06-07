import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { FaRegUserCircle } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

const Navbarlogin = () => {
    const id = localStorage.getItem("id")
    const [user, setUser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://backend-client-management.000webhostapp.com/backend/users.php/${id}`)
            .then((res) => setUser(res.data))
            .catch((error) => console.log(error))
    }, [])

    const handleLogout = () => {
        localStorage.setItem("login", "")
        localStorage.setItem("id", "")
        localStorage.setItem("loginStatus", "Logged out successfully.")
        toast.success('Log out Successful.')
        navigate('/')
    }

    return (
        <div className="flex justify-end">
            <Link to={`user/${id}`}>
                <FaRegUserCircle className='my-2 text-2xl text-black rounded-x hover:text-blue-400' />
            </Link>
            <div className="py-2 rounded-xl font-medium text-gray-600">Hi {user.name}</div>
            <button className=" px-4 py-2 rounded-xl font-medium text-gray-600 hover:text-blue-400"
                onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Navbarlogin