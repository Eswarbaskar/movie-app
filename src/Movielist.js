
import { useContext } from 'react';
import Moviecard from './Moviecard';
import UserContext from './Usercontext';

function Movielist() {
    let UserData = useContext(UserContext)
   
    return (
        <>
         { UserData.user.map((item) => {
                    return (
                       <Moviecard item={item}/> 
                    )
                })
            }
        </>
         )
}

export default Movielist