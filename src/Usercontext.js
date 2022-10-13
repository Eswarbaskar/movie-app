import React from "react";

const UserContext = React.createContext();

let UserProvider = UserContext.Provider;

export{UserProvider};
export default UserContext;