import React, {useContext, useState} from "react";
import UserContext from "./context/userContext";


const Form3 = () => {
    const {user, setUser} = useContext(UserContext);
    const [edit, setEdit] = useState();
    console.log(user)
    const submitHandler = (e) => {
        e.preventDefault();
        // setUser({ ...user, name: edit });
        setUser((prevUser)=> ({...prevUser, name: edit}))
    }
    return(
        <>
       <h2>Form 3 Using UseContext</h2>
       <p className="sub">When data submit here its shows Form1 and Form2 components</p>
        <input type="text"  value={edit} onChange={(e)=>setEdit(e.target.value)}></input>
        <button onClick = {submitHandler}>Submit</button>
        <p>Name: {user.name}</p>
        </>
    )
}
export default Form3;