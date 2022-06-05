import React from 'react'
// import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/components/Navbar.scss'
// import { AppState } from '../types/ActionsType'
import { ToggleTheme } from './ToggleTheme'

const Navbar = ({user, userToken}: any) => {
  const [role, setRole] = React.useState('')
  console.log('userRole: ', role);

  React.useLayoutEffect(() => {
    if(user){
      setRole(user[0])
    }
  }, [ user])

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
          <h2>Role: {role}</h2>
          </div>
        <div className="navbar-menu">
          <ToggleTheme/>
          <ul>
           {
           !userToken ?
              <li>
              <Link to="/login">Login</Link>
            </li>
            :
            <>
             <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="admin/newproduct">New</Link>
            </li>
            <li>    
              <Link to="/admin">{role === 'ADMIN' ? 'Admin' : 'Developer'}</Link>
            </li>
            </>
            
            }
                     
          </ul>
            </div>
            </div>
    </div>
  )
}

export default Navbar