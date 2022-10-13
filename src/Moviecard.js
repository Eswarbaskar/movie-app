import React from 'react'
import { BsFillStarFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
import { FaUserEdit } from 'react-icons/fa';
import { Counter } from './Counter';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Moviecard(prop) {
    const style = {
        color: prop.item.rating > 8 ? "green" : "red",
    };
    const [show, setShow] = useState(false);
    const showStyle = {
        display: show ? "block" : "none"
    };

    return (
        <div className='movie-container' >
            <img src={prop.item.poster} className="movier-poste" alt={prop.item.name} />
            <h3 className="card-title mt-1 text-center">{prop.item.name}</h3>
            <div className="movie-specs my-3">
                <Link to={`/edit/${prop.item.id}`} type='button' className="btn btn-primary"><FaUserEdit/></Link>
                <button onClick={() => setShow(!show)}>ShowDescripsion <BsFillArrowUpSquareFill /></button>
                <p className="card-text"><span style={style}><BsFillStarFill /></span> {prop.item.rating}</p>
            </div>
            <p className="card-text text-center" style={showStyle}>{prop.item.summary}</p>
            <div className='movie-specs'>
                <Counter />
            </div>
            
        </div>
    )
}

export default Moviecard