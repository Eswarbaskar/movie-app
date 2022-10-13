import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import UserContext from './Usercontext'

function Edit() {
   const UserData = useContext(UserContext)
    let param = useParams()
  return (
    <div>
      <h1>{UserData.user[param.id].name}</h1>
    
    </div>
  )
}

export default Edit