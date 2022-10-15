
import axios from 'axios';
import { useEffect, useState } from 'react';
import Moviecard from './Moviecard';
import { apiUrl } from './App';
// import UserContext from './Usercontext';

function Movielist() {
    // let UserData = useContext(UserContext)
    const [movielist,setMovielist]=useState([])
    useEffect(()=>{
        async function fetchData(){
            try {
                let Data = await axios.get(apiUrl)
                setMovielist(Data.data)
             } catch (error) {
                 console.log(error);
            }
        }
        fetchData()
     },[])
   
    return (
        <>
         { movielist.map((item,id) => {
                    return (
                       <Moviecard item={item} key={id}/> 
                    )
                })
            }
        </>
         )
}

export default Movielist