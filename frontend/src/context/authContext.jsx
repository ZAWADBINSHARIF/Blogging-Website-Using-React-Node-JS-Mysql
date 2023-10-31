// external import
import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    async function login(input) {
        const response = await axios.post('/auth/login', input)
        setCurrentUser(response.data)
    }

    async function logout() {
        await axios.post('/auth/logout')
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return <AuthContext.Provider value={{ currentUser, login, logout }}>
        {children}
    </AuthContext.Provider>
}