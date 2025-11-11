import React, {createContext, useState} from 'react';

const UserContext = createContext();

const data = {
    id:"32485",
    name: "Nagu",
    age: 30,
    marks: [68,65,85,56,95,85]
}


export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(data);
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;