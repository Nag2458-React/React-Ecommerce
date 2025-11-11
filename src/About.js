import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const margin = {
  margin: "auto",
  width: "90%",
};

const About = () => {
  const [data, setData] = useState(null); // single object for product
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dummyjson.com/products/1");
      if (!response.ok) {
        throw new Error("Failed to fetch data. Status: " + response.status);
      }
      const result = await response.json();
      setData(result); // this will be a single product object
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && (
        <div style={{ color: "red", textAlign: "center" }}>
          <p>Error: {error}</p>
          <button onClick={getData}>Retry</button>
        </div>
      )}

      {!loading && !error && data && (
        <>
          <h2>Welcome About Us</h2>
          <div className="tables">
            <table
              className="table-bordered table-striped table"
              style={margin}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{data.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default About;
