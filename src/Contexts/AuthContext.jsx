import { useState, useContext, createContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ?? null
  )
  const [isLoading, setIsLoading] = useState(false)
  let navigate = useNavigate()

  const login = async (user) => {
    setIsLoading(true)

    await axios
      .post(import.meta.env.VITE_BASE_URL + "/auth/login", user)
      .then((res) => {
        setUser(res.data)
        navigate("/", { replace: true })
        localStorage.setItem("user", JSON.stringify(res.data))
        // toast.success("Login Successful")
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        // toast.error("Login Error")
        setIsLoading(false)
      })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ isLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
