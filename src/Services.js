import React, { useState } from "react";

const Services = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState({ email: "", password: "", age: "" });
  const [data, setData] = useState([
    { id: "00014", name: "nagu@g", password: "123", age: "25" },
  ]);

  const [editData, setEditData] = useState(null); // For editing
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [editAge, setEditAge] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    let formValid = true;
    let newErrors = { email: "", password: "", age: "" };

    if (!email) {
      newErrors.email = "Please enter Email Address";
      formValid = false;
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email with @";
      formValid = false;
    }
    if (!password) {
      newErrors.password = "Please enter Password";
      formValid = false;
    }
    if (!age) {
      newErrors.age = "Please enter Age";
      formValid = false;
    }

    setError(newErrors);

    if (formValid) {
      setData([...data, { id: Date.now(), name: email, password, age }]);
      setEmail("");
      setPassword("");
      setAge("");
    }
  };

  const deleted = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const startEdit = (item) => {
    setEditData(item);
    setEditEmail(item.name);
    setEditPassword(item.password);
    setEditAge(item.age);
  };

  const handleUpdate = () => {
    setData(
      data.map((item) =>
        item.id === editData.id
          ? { ...item, name: editEmail, password: editPassword, age: editAge }
          : item
      )
    );
    setEditData(null); // Close modal
  };

  return (
    <>
      <div className="container">
        <div className="user">
          <h2>Welcome to User Data</h2>
          <form onSubmit={handleSub} style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-3">
                <label>Email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}
              </div>

              <div className="col-md-3">
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
                {error.password && (
                  <p style={{ color: "red" }}>{error.password}</p>
                )}
              </div>

              <div className="col-md-3">
                <label>Age:</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="form-control"
                />
                {error.age && <p style={{ color: "red" }}>{error.age}</p>}
              </div>

              <div className="col-md-3">
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container mt-4">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", color: "red" }}>
                  Please enter your details
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.password}</td>
                  <td>
                    {item.age > 18
                      ? `Adult (${item.age})`
                      : `Minor (${item.age})`}
                  </td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => startEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleted(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Popup Modal */}
      {editData && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <h4>Edit User</h4>
              <label>Email:</label>
              <input
                type="text"
                className="form-control mb-2"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
              <label>Password:</label>
              <input
                type="password"
                className="form-control mb-2"
                value={editPassword}
                onChange={(e) => setEditPassword(e.target.value)}
              />
              <label>Age:</label>
              <input
                type="number"
                className="form-control mb-2"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
              />
              <div className="mt-3">
                <button className="btn btn-success me-2" onClick={handleUpdate}>
                  Update
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditData(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
