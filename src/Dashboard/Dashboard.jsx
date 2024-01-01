import React from 'react'
import Visitor from './Visitor/Visitor'
import ManagerFeature from './Manager/ManagerFeature'
import { AdminFeature } from './Admin/AdminFeature'

const Dashboard = ({onLogOut,userData}) => {
  return (
    <div>
        <h2>welcome to the Dashboard {userData.username}({userData.role})</h2>
        {userData.role === 'Admin' && <AdminFeature role={userData.role}/>}
        {userData.role === 'Visitor' && <AdminFeature role={userData.role}/>}

        <button onClick={onLogOut}>LogOut</button>
    </div>
  )
}

export default Dashboard