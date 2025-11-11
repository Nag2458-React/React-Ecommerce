import React, { useReducer, useState } from "react";

const initialData = {
  fName: "",
  lName: "",
  age: "",
};

const initialState = [
  {
    id: 1,
    fName: "Ranjit",
    lName: "Victory",
    age: 36,
  },
  { id: 2, fName: "Nagu", lName: "Raavi", age: 32 },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.length + 1, ...action.payload }];
  }
};
const Reducer2 = () => {
  const [userState, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(initialData);
  const changeHandle = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: data });
    setData(initialData);
  };
  return (
    <>
      <div className="container">
        <h2>Welcome to Reducer2 CRED Operations</h2>

        <div className="formes">
          <form style={{ width: "80%" }}>
            <div className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label>Enter Your First Name</label>
                  <input
                    className="form-control"
                    name="fName"
                    type="text"
                    placeholder="enter your first name"
                    value={data.fName}
                    onChange={changeHandle}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Enter Your Last Name</label>
                  <input
                    className="form-control"
                    name="lName"
                    type="text"
                    placeholder="enter your last name"
                    value={data.lName}
                    onChange={changeHandle}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label>Enter Your Age</label>
                  <input
                    className="form-control"
                    name="age"
                    type="number"
                    placeholder="enter your age"
                    value={data.age}
                    onChange={changeHandle}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
          <table
            className="table-bordered table-striped table"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {userState.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.fName}</td>
                  <td>{user.lName}</td>
                  <td>{user.age}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                  <td>
                    <button>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Reducer2;
// this is advanced hook concept
// input box boxes lo unna data (values) ni const initialData = {  fName: "",  lName: "",  age: "",}; store cheskovali.
// aa data ni const [data, setData] = useState(initialData); usestate use chesi data ane variable loki theskovali
// input boxes lo value and onchange function theeskovali like this value={data.fName} onChange={changeHandle}
// changeHandle function use chesi mundu data copy cheskovali like setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
// use reducer ante first reducer function create cheyyali
// like const [userState, dispatch] = useReducer(reducer, initialState);
// 'useReducer' anedhi predefined function
// 'useReducer' loki rendu arguments vasthai (reducer, initialState);
// reducer, initialState top declare cheyyali
// initialState input lo unna data ni istham
//reducer loki malli two argmnts vasthai like const reducer = (state, action) => {};
// (state, action) denilo state anedi updates values untai
// action anedi like switch (action.type) {    case "ADD":  return [...state, { id: state.length + 1, ...action.payload }];}
//
