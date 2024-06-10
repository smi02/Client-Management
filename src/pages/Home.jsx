import Narbar from "../components/Navbar"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Home = () => {
  return (
    <>
      <Narbar />
      <div className="w-full flex justify-center items-center h-screen bg-indigo-400">
        <h1 className="text-center text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">Client Managent</h1>
      </div>
      <div className="bg-blue-800">
        <div className="container flex flex-col justify-between py-6 px-6 sm:flex-row">
          <p className="text-center text-white md:text-left">
            © Copyright 2024. All right reserved, SMI.
          </p>
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="https://github.com/smi02" target="_blank">

              <FaGithub className="text-2xl text-white hover:text-yellow-400" />
            </a>
            <a href="https://www.linkedin.com/in/viet-nguyen-378585279/" className="pl-4" target="_blank">
              <FaLinkedin className="text-2xl text-white hover:text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home