import React from 'react'
 import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/components/Navbar.scss'
 import { AppState } from '../types/ProductType'
import Cart from './Products/Cart'
import { ToggleTheme } from './ToggleTheme'
import UserHistory from './User/History'

const Navbar = ({userToken}: any) => {
   const userDetailsWithRole = localStorage.getItem('user')?.split(',') as any

  // const location = useLocation()
  const [role, setRole] = React.useState('')
  const [history, openHistory] = React.useState(false)

  console.log('user Role from backEnd: ',userDetailsWithRole)
  console.log('userRole: ', role);
 const handleHistory = () => {
    openHistory(!history)
  }

  React.useEffect(() => {
    if(userDetailsWithRole){
      setRole(userDetailsWithRole[0])
    }
  }, [userToken,userDetailsWithRole])

// const {allProducts } =useSelector((state :AppState)=> state.products)
useSelector((state: AppState) => console.log('state: ', state))

  const navigate = useNavigate()

  const logoutUser = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
<>

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
           !userToken &&
              <li>
              <Link to="/login">Login</Link>
            </li>
            }
          
             <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <button onClick={handleHistory}>History</button>
            </li>
            {role === 'ADMIN' &&
            <li>    
              <Link to="/admin">Admin</Link>
            </li>
             }
            <li onClick={logoutUser}>
              <Link to="/login">Logout</Link>
            </li>
           
            <li>
            </li>
          </ul>
          {history && <UserHistory/>}
              <Cart/>
            
        </div> 
       </div>
    </div>

    {/* <Cart/>    */}
   
</>
    
  )
}

export default Navbar