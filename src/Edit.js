import React from 'react'
import {useParams} from 'react-router-dom'

function Edit() {
    let param = useParams()
  return (
    <div>{param.id}
    <h1>{param.name}</h1>
    </div>
  )
}

export default Edit