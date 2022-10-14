
import axios from 'axios';
import { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
// import UserContext from './Usercontext';

function Movielist() {
    // let UserData = useContext(UserContext)
    const [movielist,setMovielist]=useState([])
    useEffect(()=>{
        async function fetchData(){
            try {
                let Data = await axios.get("https://634820b50b382d796c6a0c42.mockapi.io/movie-app/api")
                setMovielist(Data.data)
             } catch (error) {
                 console.log(error);
            }
        }
        fetchData()
     },[])
   
    return (
        <>
         { movielist.map((item,index) => {
                    return (
                       <Moviecard item={item} key={index}/> 
                    )
                })
            }
        </>
         )
}

export default Movielist