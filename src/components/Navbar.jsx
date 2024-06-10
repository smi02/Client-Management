import { Link } from "react-router-dom"

const Narbar = () => {
  return (
    <nav className="">
      <div className="container flex items-center justify-between py-2 px-2">
        <div className="text-2xl">SMI</div>
        <div>
          <Link to='/' className="px-4 py-2 rounded-xl font-medium text-blue-600">Home</Link>
          <Link to='/login' className=" px-4 py-2 rounded-xl font-medium text-blue-600">Login</Link>
          <Link to='/register' className=" px-4 py-2 rounded-xl font-medium text-gray-600">Register</Link>
          </div>
      </div>
    </nav>
  )
}

export default Narbar