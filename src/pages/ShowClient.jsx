import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";

const ShowClient = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const login = localStorage.getItem("login")
    if (!login) {
      navigate('/')
    }

    setLoading(true)

    axios.get(`https://backend-client-management.000webhostapp.com/backend/${id}`)
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
    {loading ? (<Loading />) : (
      <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Info client</h1>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 mx-auto'>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Name</span>
          <span>{data.name}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Age</span>
          <span>{data.age}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Phone</span>
          <span>{data.phone}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Company</span>
          <span>{data.company}</span>
        </div>
        <div className='my-4'>
          <span className='text-xl mr-4 text-gray-500'>Web</span>
          <span>{data.web}</span>
        </div>
      </div>
    </div>
    )}
    </>
  )
}

export default ShowClient