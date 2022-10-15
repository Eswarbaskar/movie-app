import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiUrl } from './App';



function Viewmovie() {
  let param = useParams()
  const [movielist, setMovielist] = useState({})
  async function fetchData() {
    try {
      let Data = await axios.get(`${apiUrl}/${param.id}`)
      setMovielist(Data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {

    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="text-center">
        <img src={movielist.poster} className="viewimage" alt={movielist.name}/>
        <h3>{movielist.name}</h3>
        <p>{movielist.summary}</p>
      </div>
    </div>
  )
}

export default Viewmovie