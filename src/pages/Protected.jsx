import { useEffect } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


const Protected = (props) => {

    const navigate = useNavigate()
    const { Component } = props

    useEffect(() => {
        const login = localStorage.getItem("login")
        if (!login) {
            localStorage.setItem("loginStatus", "Please login to view home!")
            toast.error('Please login to view home!')
            navigate('/', { replace: true })
        }

    }, [])
    
    return (
        <Component />
    )
}

export default Protected