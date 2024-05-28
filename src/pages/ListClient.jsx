import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListClient = () => {
    const [clients, setClients] = useState([]);
    
    useEffect(() => {
        getClients()
    }, []);

    const getClients = () => {
        axios.get('http://localhost/backend/')
        .then((res) => setClients(res.data))
        .catch((error) => console.log(error))
    }
    

    const deleteClient = (id) => {
        axios.delete(`http://localhost/backend/${id}/delete`)
        .then((res) => {
            console.log(res.data)
            getClients()
        })
        .catch((error) => console.log(error))
    }

  return (
    <>
    <h1>ListClient</h1>
    <Link to={"client/create"}>Create client</Link>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>phone</th>
                <th>company</th>
                <th>web</th>
                <th>operation</th>
            </tr>
        </thead>
        <tbody>
            {clients.map((client, index) => (
                <tr key={index}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
                    <td>{client.phone}</td>
                    <td>{client.company}</td>
                    <td>{client.web}</td>
                    <td>
                        <Link to={`client/${client.id}/edit`}>Edit</Link>
                        <button onClick={() => deleteClient(client.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default ListClient