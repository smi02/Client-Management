import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const UpdateClient = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        const login = localStorage.getItem("login")
        if (!login) {
            navigate('/')
        }
        setLoading(true)

        axios.get(`https://backend-client-management.000webhostapp.com/backend/${id}`)
            .then(res => {
                setData(res.data)
                setData(method => ({...method, method: "put"}))
                setLoading(false)
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
        axios.post('https://backend-client-management.000webhostapp.com/backend/', data, {headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }})
            .then(res => {
                console.log(res.data);
                toast.success('Update Successful.')
                navigate('/home')
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
        {loading ? (<Loading />) : (
            <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Update client</h1>
            <form action="" onSubmit={handleSubmit}
                className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='Name: ' value={data.name} onChange={handleChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="">Age</label>
                    <input type="number" name='age' placeholder='Age: ' value={data.age} onChange={handleChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="">phone</label>
                    <input type="number" name='phone' placeholder='Phone: ' value={data.phone} onChange={handleChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="">company</label>
                    <input type="text" name='company' placeholder='Company: ' value={data.company} onChange={handleChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4 text-gray-500" htmlFor="">Web</label>
                    <input type="text" name='web' placeholder='Web: ' value={data.web} onChange={handleChange}
                        className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <button type='submit' name="update" className="p-2 bg-sky-300 m-8">Submit</button>
            </form>
        </div>
        )}
        </>
    )
}

export default UpdateClient