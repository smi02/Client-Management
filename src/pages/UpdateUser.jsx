import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const UpdateUser = () => {

    const [data, setData] = useState([]);

    const id = localStorage.getItem("id")

    const navigate = useNavigate()

    useEffect(() => {

        const login = localStorage.getItem("login")
        if (!login) {
            navigate('/')
        }

        axios.get(`https://backend-client-management.000webhostapp.com/backend/users.php/${id}`)
            .then(res => {
                setData(res.data)
                setData(method => ({...method, method: "put"}))
            })
            .catch((error) => console.log(error))
    }, [])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://backend-client-management.000webhostapp.com/backend/users.php', data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          })
            .then(res => {
                const check = res.data.status
                if (check == 1) {
                    toast.success('Update Successful.')
                    setData({})
                    navigate(`/home/user/${id}`)
                } else if (check == 0) {
                    toast.error("Error")
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className="p-4">
            <div className="flex">
                <Link to={`/home/user/${id}`}
                    className="bg-sky-800 text-white px-3 py-1 rounded-md w-fit">
                    <BsArrowLeft className="text-2xl" />
                </Link>
            </div>
            <h1 className="text-3xl my-4">Update client</h1>
            <form action="" onSubmit={handleSubmit}
                className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='Name: ' value={data.name} onChange={handleChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="">Email</label>
                    <input type="email" name='age' placeholder='Email: ' value={data.email} onChange={handleChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="">password</label>
                    <input type="password" name='password' placeholder='Password: ' onChange={handleChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <button type='submit' name="update" className="p-2 bg-sky-300 m-8">Submit</button>
            </form>
        </div>
    )
}

export default UpdateUser