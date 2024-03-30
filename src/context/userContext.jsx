import  React ,{createContext,useContext,useState} from 'react'

const UserContext=createContext();

export const getUser=()=>{
    return useContext(UserContext)
}

export const UserProvider=({children})=>{
    const userData=JSON.parse(localStorage.getItem('userData'))
    console.log(userData);

return(
    <UserContext.Provider value={userData}>
        {children}
    </UserContext.Provider>
)
}