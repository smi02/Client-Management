import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateClient = () => {

    const [data, setData] = useState([]);

    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost/backend/${id}`)
            .then(res => {
                setData(res.data)
                console.log(res.data);
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
        axios.put(`http://localhost/backend/${id}/edit`, data)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <h1>Update client</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' placeholder='Name: ' value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number" name='age' placeholder='Age: ' value={data.age} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">phone</label>
                    <input type="number" name='phone' placeholder='Phone: ' value={data.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">company</label>
                    <input type="text" name='company' placeholder='Company: ' value={data.company} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="">Web</label>
                    <input type="text" name='web' placeholder='Web: ' value={data.web} onChange={handleChange} />
                </div>
                <button type='submit' name="update">Submit</button>
            </form>
        </>
    )
}

export default UpdateClient