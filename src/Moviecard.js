import React from 'react'
import { BsFillStarFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
import { Counter } from './Counter';
import { useState } from 'react';
import { AiOutlineDelete,AiOutlineFolderView,AiOutlineEdit } from 'react-icons/ai';

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
                
                <button onClick={() => setShow(!show)}>ShowDescripsion <BsFillArrowUpSquareFill /></button>
                <p className="card-text rating"><span style={style}><BsFillStarFill /></span> {prop.item.rating}</p>
            </div>
            <p className="card-text text-center" style={showStyle}>{prop.item.summary}</p>
            <div className='movie-specs'>
                <Counter />
               <div className='buttons'>
               <Link to={`/edit/${prop.item.id}`} type='button' className="btn btn-primary buttons1"><AiOutlineEdit/></Link>
                <Link to={`/viewmovie/${prop.item.id}`} type='button' className="btn btn-warning buttons1"><AiOutlineFolderView/></Link>
                <Link to={``} type='button' className="btn btn-danger buttons1"><AiOutlineDelete/></Link>
               </div>
            </div>
            
        </div>
    )
}

export default Moviecard