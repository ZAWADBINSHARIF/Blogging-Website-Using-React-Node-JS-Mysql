// external import
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"

// internal import
import { AuthContext } from "../context/authContext"

const Login = () => {

  const { login } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  function handleInputChange(e) {
    const { name, value } = e.target

    setFormData(prev => {
      return { ...prev, [name]: value }
    })
  }

  async function handleLogin(e) {
    e.preventDefault()
    try {
      await login(formData)
      toast.success('Logged in')
      setErrorMessage(null)
      navigate('/')
    } catch (error) {
      setErrorMessage(error.response.data.error.msg)
      console.log(error.response.data.error.msg)
    }

  }

  return (
    <div className="auth">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input required type="text" value={formData.usrename} onChange={e => handleInputChange(e)} name="username" id="username" placeholder="username" />
        <input required type="password" value={formData.password} onChange={e => handleInputChange(e)} name="password" id="password" placeholder="password" />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
        <span>{"Don't you have an account? "} <Link to={'/register'}>Register</Link></span>
      </form>
    </div>
  )
}
export default Login