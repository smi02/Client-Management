import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateClient = () => {

    const [data, setData] = useState([]);

    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost/backend/save", data)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch((error) => console.log(error))
    }

  return (
    <>
    <div className="container">
        <h1>Create client</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name='name' placeholder='Name: ' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="number" name='age' placeholder='Age: ' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">phone</label>
                <input type="number" name='phone' placeholder='Phone: ' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">company</label>
                <input type="text" name='company' placeholder='Company: ' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">Web</label>
                <input type="text" name='web' placeholder='Web: ' onChange={handleChange} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default CreateClient