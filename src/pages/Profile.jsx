import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import toast from "react-hot-toast";

const Profile = () => {

  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const id = localStorage.getItem("id")

  useEffect(() => {
    const login = localStorage.getItem("login")
    if (!login) {
      navigate('/')
    }

    axios.get(`https://backend-client-management.000webhostapp.com/backend/users.php/${id}`)
      .then(res => {
        setData(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const deleteUser = (id) => {
    const check = confirm("Are you Sure?")
    if (check == true) {
      axios.delete(`https://backend-client-management.000webhostapp.com/backend/users.php/${id}/delete`)
        .then((res) => {
          console.log(res.data)
          localStorage.setItem("login", "")
          localStorage.setItem("id", "")
          localStorage.setItem("loginStatus", "Delete user successfully.")
          toast.success('Delete user Successful.')
          navigate('/')
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Profile</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Name</span>
          <span>{data.name}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Email</span>
          <span>{data.email}</span>
        </div>
        <div className='my-4 flex flex-row justify-around'>
          <Link to={`edit`}>
            <AiOutlineEdit className='text-2xl text-yellow-600' />
          </Link>
          <button onClick={() => deleteUser(data.id)}>
            <MdOutlineDelete className='text-2xl text-red-600' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile