import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton"
import toast from "react-hot-toast";

const CreateClient = () => {

    const [data, setData] = useState({
        name: "",
        age: "",
        phone: "",
        company: "",
        web: "",
        method: "post",
    });
    
    const navigate = useNavigate()

    useEffect(() => {
        const login = localStorage.getItem("login")
        if (!login) {
          navigate('/')
        }
      }, [])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({...values, [name]: value}))
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://backend-client-management.000webhostapp.com/backend/save", data, {headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }})
        .then(res => {
            console.log(res.data);
            toast.success('Create Successful.')
            navigate('/home')
        })
        .catch((error) => console.log(error))
    }

  return (
    <div>
    <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Create client</h1>
        <form action="" onSubmit={handleSubmit}
        className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500" htmlFor="">Name</label>
                <input type="text" name='name' placeholder='Name: ' onChange={handleChange}
                className="border-2 border-gray-500 px-4 py-2 w-full" />
            </div>
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500" htmlFor="">Age</label>
                <input type="number" name='age' placeholder='Age: ' onChange={handleChange}
                className="border-2 border-gray-500 px-4 py-2 w-full" />
            </div>
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500" htmlFor="">phone</label>
                <input type="number" name='phone' placeholder='Phone: ' onChange={handleChange}
                className="border-2 border-gray-500 px-4 py-2 w-full" />
            </div>
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500" htmlFor="">company</label>
                <input type="text" name='company' placeholder='Company: ' onChange={handleChange}
                className="border-2 border-gray-500 px-4 py-2 w-full" />
            </div>
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500" htmlFor="">Web</label>
                <input type="text" name='web' placeholder='Web: ' onChange={handleChange}
                className="border-2 border-gray-500 px-4 py-2 w-full" />
            </div>
            <button type='submit' className="p-2 bg-sky-300 m-8">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default CreateClient