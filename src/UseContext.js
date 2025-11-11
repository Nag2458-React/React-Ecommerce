import React, { useState } from "react";

const ParentComp = () =>{
    const [userDetails , setuserDetails] = useState ({
        fname : 'Nagababu',
        lname : 'Raavi',
    });
    return (
    <div className="container">
            <h2>Welcome to UseContext Old Style</h2>
            <p className="sub">UseContext is that if a value changes in one component, all components will also change.</p>
            <h5>Parent Component</h5> 
            <ChildComp userDetails ={userDetails} />
    </div>
    );
}

const ChildComp = (props) =>{
    
    return(
        <div>
            <h5>Child Component</h5>
            <SubChildComp userDetails={props.userDetails}/>
        </div>
    );
}
const SubChildComp = ({userDetails}) =>{
    return(
        <div>
            <h5>Sub Child Component</h5>
            <h5>User Details: {userDetails.fname} : {userDetails.lname}</h5>
            
        </div>
    );
}


export default ParentComp;