import React from 'react'
import '../styles/pages/Admin.scss'
const Admin = () => {
  React.useEffect(() => {
    document.title = 'Admin'
  }, [])
  return (
    <div className="admin">Admin</div>
  )
}

export default Admin