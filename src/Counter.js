import React, { useState } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';




export function Counter() {
    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0);
    return (
        <div>
            <button onClick={() => setlike(like + 1)} className='buttons1'><AiFillLike /></button>
            <span className='like'>{like}</span>
            <button onClick={() => setdislike(dislike + 1) } className='buttons2'><AiFillDislike /></button>
            <span className='dislike'>{dislike}</span>
            
        </div>
        
       
    );
}
