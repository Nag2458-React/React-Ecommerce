import React, { useState } from "react";
import Form3 from "./Form3";

const Form2 = () => {
    // Destructuring the state properly
    
    const [message, setMessage] = useState({ id: '', fname: '',lname:'' });

    // Handle input changes
    const changeValue = (e) => {
        setMessage({ ...message, fname: e.target.value });
    };
    const changeValue1 = (e) => {
        setMessage({ ...message, lname: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage({ ...message, fname: '',lname: '' });
        // Create new item with a unique ID
        postData();
        // Update the list with the new item
        // setList([...list, newTodo]);
        // Clear the input field after submission
        
    };
    const postData = async () => {
        const response = await fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: message.fname,
                description:message.lname,
                id: new Date().getTime()
                
            }),
            
        });
        console.log(response);
    }
    return (
        <div className="container">
            <h2>Welcome to Form2 "Edit and Delete"</h2>
            <form style={{ width: '50%' }} onSubmit={handleSubmit}>
                <label>First Name</label>
                <input 
                    type="text" 
                    name='fname' 
                    value={message.fname}
                    onChange={changeValue} 
                    className="form-control" 
                />
                <label>Last Name</label>
                <input 
                    type="text" 
                    name='lname' 
                    value={message.lname}
                    onChange={changeValue1} 
                    className="form-control" 
                />
                <button 
                    type="submit" 
                    style={{ margin: 'auto' }}
                >
                    Submit
                </button>
            </form>

            <hr />
            {/* <ul>
                {list.map((item) => {
                    const { id, fname } = item;
                    return (
                        <li key={id}>
                            {id}: {fname}
                        </li>
                    );
                })}
            </ul> */}
            
            <Form3 />
        </div>
    );
}

export default Form2;
