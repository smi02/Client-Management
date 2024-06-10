import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const Profile = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const id = localStorage.getItem("id")

  const deletedata = {
    id: id,
    method: "delete"
  }

  useEffect(() => {
    const login = localStorage.getItem("login")
    if (!login) {
      navigate('/')
    }
    setLoading(true)

    axios.get(`https://backend-client-management.000webhostapp.com/backend/users.php/${id}`)
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  const deleteUser = () => {
    const check = confirm("Are you Sure?")
    if (check == true) {
      axios.post('https://backend-client-management.000webhostapp.com/backend/users.php', deletedata,  {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
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
    <>
    {loading ? (<Loading />) : (
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
    )}
    </>
  )
}

export default Profile