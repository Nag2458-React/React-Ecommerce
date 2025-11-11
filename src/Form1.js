import React, {useContext, useState} from "react";
import UserContext from "./context/userContext";

const Form1 = () => {
    const {user, setUser} = useContext(UserContext);
    const userData ={
        fname:"Nagababu",
        id:"123",
        lname :'Raavi',
        age:'28',
        gender:'Male' 
    }
    const [usersList, setUsersList] = useState([userData]);
    // const [user, setUser] = useState({ id: '', fname: '', lname: '', age: '' });

    const changeUser = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const dataSubmit = (e) => {
        e.preventDefault();
        let newUser = {
            id: new Date().getTime().toString(),
            fname: user.fname,
            lname: user.lname,
            age: user.age
        };
        setUsersList([...usersList, newUser]);
        setUser({
            id: '',
            fname: '',
            lname: '',
            age: ''
        });
    }

    return (
        <div className="container">

            <h2>Welcome to Form1</h2>  
            <div className="formes">
                <form style={{ width: '80%' }} onSubmit={dataSubmit}>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Enter Your First Name</label>
                                <input
                                    className="form-control"
                                    value={user.fname}
                                    name='fname'
                                    onChange={changeUser}
                                    type="text"
                                    placeholder="enter your first name"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Enter Your Last Name</label>
                                <input
                                    className="form-control"
                                    value={user.lname}
                                    name='lname'
                                    type="text"
                                    onChange={changeUser}
                                    placeholder="enter your last name"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>Enter Your Age</label>
                                <input
                                    className="form-control"
                                    value={user.age}
                                    name='age'
                                    type="number"
                                    onChange={changeUser}
                                    placeholder="enter your age"
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group mt-4">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>

                <table className='table-bordered table-striped table' style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersList.map((eachUser) => {
                            const { id, fname, lname, age } = eachUser;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{fname}</td>
                                    <td>{lname}</td>
                                    <td>{age}</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <h2>Form3 Data Using UseContext</h2>
           Name : {user.name}<br/>
          Age :  {user.age}
        </div>
    );
}

export default Form1;
