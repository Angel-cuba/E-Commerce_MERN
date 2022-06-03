import React from 'react'
// import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/components/Navbar.scss'
// import { AppState } from '../types/ActionsType'
import { ToggleTheme } from './ToggleTheme'

const Navbar = ({user}: any) => {
  const [role, setRole] = React.useState('')

  React.useEffect(() => {
    if(user){
      setRole(user[0])
    }
  }, [user])

// const {allProducts } =useSelector((state :AppState)=> state.products)

  const navigate = useNavigate()

  const logoutUser = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div  className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Logo</h1>
          </div>
        <div className="navbar-menu">
          <ToggleTheme/>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">{role === 'ADMIN' ? 'Admin' : 'Developer'}</Link>
            </li>
            {
              !user ?
              <li>
              <Link to="/login">Login</Link>
            </li>
            :
            <li>
              <Link to="/login" onClick={logoutUser}>Logout</Link>
            </li>
            
            }
          </ul>
            </div>
            </div>
    </div>
  )
}

export default Navbar