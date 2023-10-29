// external import
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from "react-toastify"

const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [errorMessage, setErrorMessage] = useState(null)
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  function handleInputChange(e) {
    const { name, value } = e.target

    setFormData(prev => {
      return { ...prev, [name]: value }
    })
  }

  async function handleRegistration(e) {
    e.preventDefault()
    try {
      const response = await axios.post('/auth/registration', {
        ...formData
      })
      
      console.log(response.data.msg)
      toast.success(response.data.msg)
      setErrorMessage(null)
      navigate('/login')
    } catch (error) {
      setErrorMessage(error.response.data.error.msg)
      console.log(error.response.data.error.msg)
    }

  }

  return (
    <div className="register">
      <h1>Register</h1>
      <form onSubmit={handleRegistration}>
        <input required type="text" value={formData.username} onChange={e => handleInputChange(e)} name="username" id="username" placeholder="username" />
        <input required type="text" value={formData.email} onChange={e => handleInputChange(e)} name="email" id="email" placeholder="email" />
        <input required type="password" value={formData.password} onChange={e => handleInputChange(e)} name="password" id="password" placeholder="password" />
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
        <span>{"Do you have an account? "} <Link to={'/login'}>Login</Link></span>
      </form>
    </div>
  )
}
export default Register