import axios from 'axios'
import React ,{ useEffect }from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { apiUrl } from './App'


function Delete() {
    let navigate=useNavigate()
    let params =useParams()
    async function handledelete(){
        
        await axios.delete(`${apiUrl}/${params.id}`)
    }
    handledelete()
    async function fetchData() {
        try {
           await axios.get(apiUrl)
          navigate("/movielist")
        }
        catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
    
        fetchData()
      }, [])
  return (
    <></>
  )
}

export default Delete