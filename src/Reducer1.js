import React, { useReducer, useState } from "react";

const initialData = {
  fName: "Nagu",
  lName: "R",
  maritalStatus: "Default",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "FNAMECHANGE":
      return { ...state, fName: action.payload };
    case "LNAMECHANGE":
      return { ...state, lName: action.payload };
    case "MARRITALSTATUS":
      return { ...state, maritalStatus: action.payload };
    default:
      return state; // Always return the current state if the action is unrecognized
  }
};

const Reducer1 = () => {
  const [user, dispatch] = useReducer(userReducer, initialData);
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    dispatch({ type: "FNAMECHANGE", payload: data.fName });
    dispatch({ type: "LNAMECHANGE", payload: data.lName });
    dispatch({ type: "MARRITALSTATUS", payload: data.maritalStatus });
  };

  return (
    <div className="forms container">
      <h2>Welcome to Reducer1 Submit & Change Operations</h2>
      <form style={{ width: "40%", height: "300px" }} onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="name"
          name="fName"
          className="form-control"
          onChange={handleChange}
          value={data.fName}
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="lname"
          name="lName"
          className="form-control"
          onChange={handleChange}
          value={data.lName}
        />

        <label>Marital Status</label>
        <select
          name="maritalStatus"
          onChange={handleChange}
          className="form-control"
          value={data.maritalStatus}
        >
          <option value="">Select</option>
          <option value="Married">Married</option>
          <option value="Un Married">Un Married</option>
        </select>

        <button style={{ float: "right", marginTop: "10px" }} type="submit">
          Submit
        </button>
      </form>
      <br />
      <table className="table-bordered" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Marital Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.fName}</td>
            <td>{user.lName}</td>
            <td>
              {user.maritalStatus === "Un Married" ? (
                <>
                  {user.maritalStatus} so <a href="#">Go to Matrimony site</a>
                </>
              ) : (
                user.maritalStatus
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reducer1;
