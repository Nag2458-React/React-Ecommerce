import React, { useState } from "react";

const Forms = () => {
  const userData = {
    text: "Nagababu",
    id: "123",
    lname: "Raavi",
    age: "28",
    gender: "Male",
  };

  const [list, setList] = useState([userData]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
    lname: "",
    age: "",
    gender: "",
  });

  const changeMessage = (e) => {
    setMessage((prevMessage) => ({
      ...prevMessage,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
      lname: message.lname,
      age: message.age,
      gender: message.gender,
    };
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
      lname: "",
      age: "",
      gender: "",
    });
  };
  const changeEdit = (e) => {};
  const changeDelete = (id) => {
    let newTodos = list.filter((item) => {
      return item.id !== id;
    });
    setList(newTodos);
  };
  return (
    <>
      <div className="">
        <div className="container">
          <div className="newform">
            <form>
              <div className="row">
                <div className="col-md-3">
                  <label>
                    <b>Enter First Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="text"
                    id="message"
                    placeholder="Enter First Name"
                    value={message.text}
                    onChange={changeMessage}
                  />
                </div>
                <div className="col-md-3">
                  <label>
                    <b>Enter Last Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    id="lname"
                    placeholder="Enter Last Name"
                    value={message.lname}
                    onChange={changeMessage}
                  />
                </div>
                <div className="col-md-3">
                  <label>
                    <b>Enter Age</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    id="age"
                    placeholder="Enter Age"
                    value={message.age}
                    onChange={changeMessage}
                  />
                </div>
                <div className="col-md-3">
                  <label>
                    <b>Enter Gender</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="gender"
                    id="gender"
                    placeholder="Enter Gender"
                    value={message.gender}
                    onChange={changeMessage}
                  />
                </div>
              </div>
              <div className="col-md-12 text-center">
                <button onClick={handleSubmit} className="btn btn-primary mt-4">
                  Add
                </button>
              </div>
            </form>
            <table
              className="table-bordered table-striped table"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>edit</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {list.map((eachItem) => {
                  const { text, id, lname, age, gender } = eachItem;
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{text}</td>
                      <td>{lname}</td>
                      <td>{age}</td>
                      <td>{gender}</td>
                      <td>
                        {" "}
                        <button className="edit" onClick={changeEdit}>
                          edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => changeDelete(id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
