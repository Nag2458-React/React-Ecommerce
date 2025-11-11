import React, { useEffect, useState } from "react";

const Api2 = () => {
  const [product, setProduct] = useState([]); // Initialize as an empty array

  const dataFetch = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`); // Use backticks for template literals
      }
      const result = await response.json();
      console.log(result);
      setProduct(result.products); // Assuming the products are in the 'products' key
    } catch (error) {
      console.error("There is a problem:", error); // Log the actual error
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h2>Get API Data & CRED Operations</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>DiscountPercentage</th>
                <th>Rating</th>
                <th>Stock</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td> {/* Include category if needed */}
                  <td>{item.price}</td> {/* Include beauty if needed */}
                  <td>{item.discountPercentage}</td>
                  <td>{item.rating}</td>
                  <td>{item.stock}</td>
                  <td>
                    {item.tags[0]},{item.tags[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Api2;
