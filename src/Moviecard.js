import React from 'react'
import {BsFillStarFill,BsFillArrowUpSquareFill} from 'react-icons/bs';
import { Counter } from './Counter';
import { useState } from 'react';

function Moviecard(prop) {
    const style = {
        color: prop.item.rating > 8 ? "green" : "red",
    };
    const[show,setShow]=useState(false);
    const showStyle={
        display: show ? "block" : "none"
    };
   
    return (
        <div className='movie-container' >
            <img src={prop.item.poster} className="movier-poste" alt={prop.item.name} />
            <div className="movie-specs">
                <h5 className="card-title">{prop.item.name}</h5>
                <button onClick={() => setShow(!show)}>ShowDescripsion <BsFillArrowUpSquareFill /></button>
                <p className="card-text"><span style={style}><BsFillStarFill /></span> {prop.item.rating}</p>
            </div>
            <div className='movie-specs'>
            <Counter />
            <div>
            <input placeholder='command'/>
            <button>Enter</button>
            </div>
            </div>
            
            <p class="card-text" style={showStyle}>{prop.item.summary}</p>
        </div>
    )
}

export default Moviecard