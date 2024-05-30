import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Narbar from '../components/Navbar';

const ListClient = () => {
    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getClients()
    }, []);

    const getClients = () => {
        axios.get('http://localhost/backend/')
            .then((res) => setClients(res.data))
            .catch((error) => console.log(error))
    }

    const deleteClient = (id) => {
        const check = confirm("Are you Sure?")
        if (check == true) {
            axios.delete(`http://localhost/backend/${id}/delete`)
            .then((res) => {
                console.log(res.data)
                getClients()
            })
            .catch((error) => console.log(error))
        }
    }

    return (
        <>
        <Narbar />
        <div className='p-4'>
            <h1 className='text-3xl my-6'>ListClient</h1>
            <div>
            </div>
            <div className="flex justify-between items-center px-2">
                <input type="text"
                    id='search'
                    placeholder='name...'
                    onChange={(e) => setSearch(e.target.value)}
                    className='px-3 py-1 font-semibold placeholder-gray-500 text-black rounded-md 
                    border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
                />
                <Link to={"client/create"}> {/*to='/client/create' */}
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>
            <table className='w-full border-separate border-spacing-2'>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md w-1/12'>No</th>
                        <th className='border border-slate-600 rounded-md w-2/12'>name</th>
                        <th className='border border-slate-600 rounded-md w-1/12'>age</th>
                        <th className='border border-slate-600 rounded-md w-2/12'>phone</th>
                        <th className='border border-slate-600 rounded-md w-2/12'>company</th>
                        <th className='border border-slate-600 rounded-md w-2/12'>web</th>
                        <th className='border border-slate-600 rounded-md w-2/12'>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.filter((item) => {
                        return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
                    }).map((client, index) => (
                        <tr key={index}>
                            <td className='border border-slate-700 rounded-md text-center w-1/12'>{index + 1}</td>
                            <td className='border border-slate-700 rounded-md text-center w-2/12'>{client.name}</td>
                            <td className='border border-slate-700 rounded-md text-center w-1/12'>{client.age}</td>
                            <td className='border border-slate-700 rounded-md text-center w-2/12'>{client.phone}</td>
                            <td className='border border-slate-700 rounded-md text-center w-2/12'>{client.company}</td>
                            <td className='border border-slate-700 rounded-md text-center w-2/12'>{client.web}</td>
                            <td className='border border-slate-700 rounded-md text-center'>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`client/${client.id}`}>
                                        <BsInfoCircle className='text-2xl text-green-800' />
                                    </Link>
                                    <Link to={`client/${client.id}/edit`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                                    </Link>
                                    <button onClick={() => deleteClient(client.id)}>
                                        <MdOutlineDelete className='text-2xl text-red-600' />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ListClient