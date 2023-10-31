// external import
import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import { useContext } from "react"
import { toast } from "react-toastify"

// internal import
import { AuthContext } from "../context/authContext"

const Navbar = () => {

  const { currentUser, logout } = useContext(AuthContext)

  async function handleLogout() {
    try {
      await logout()
      toast.success('User logout successfully')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav>
      <div className="container">
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="links">
          <Link className="link" to="/?cat=Art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=Science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=Technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=Cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=Design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=Food">
            <h6>FOOD</h6>
          </Link>
          <span style={{ textTransform: 'capitalize' }}>{currentUser?.username}</span>
          {currentUser ?
            <span onClick={() => handleLogout()}>Logout</span>
            :
            <Link to={'/login'}>
              <span>Login</span>
            </Link>
          }

          <span className="write">
            <Link className="link" to='/write'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </nav>
  )
}
export default Navbar