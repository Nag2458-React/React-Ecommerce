import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


const Api1 = () => {
    const apiUrl = 'http://localhost:4000/products'; // Replace with your API URL
    const [data, setData] = useState([]); // Initialize state
    const [selectedUser, setSelectedUser] = useState(null); // Initialize state
    const [filter, setFilter] = useState({});
    const [searchItem, setSearchItem] = useState('');

    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setData(result); // Set the fetched data
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };
    useEffect(() => {
        fetchData(); // Call fetchData on component mount
    }, []); 
    let openUser = (id) =>{
        setSelectedUser(id);
        const user = data.find((eachUser) => eachUser.id === id);
        setFilter(user);
    }


    const closeModal = () => {
        setSelectedUser(null);
    };

    // const refresh = () => {
    //     fetchData();
    // }
    // Filtered products based on search term
    const filteredProducts = data.filter((item) =>
        item.title.toLowerCase().includes(searchItem.toLowerCase())
    );

     // Function to download data as Excel
     const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredProducts);
        const workbook = XLSX.utils.book_new();  
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
        XLSX.writeFile(workbook, 'nagababu.xlsx');
    };

    // Function to download data as PDF
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.autoTable({
            head: [['ID', 'Title', 'Description', 'Width', 'Height', 'Depth']],
            body: filteredProducts.map(item => [
                item.id,
                item.title,
                item.description,
                item.dimensions ? item.dimensions.width : 'N/A',
                item.dimensions ? item.dimensions.height : 'N/A',
                item.dimensions ? item.dimensions.depth : 'N/A',          
            ]),
        });
        doc.save('nagababu.pdf');
    };


    return (
        <div className='container'>
            <h2>Getting API Data</h2> 
            <div className='table-responsive'>
                {/* <button onClick={refresh} >Refresh</button> */}
                <button onClick={downloadExcel} className="btn btn-success excels">
                    Download Excel
                </button>
                <button onClick={downloadPDF} className="btn btn-warning pdfs" style={{ marginLeft: '10px' }}>
                    Download PDF
                </button>
                <input type='text' value={searchItem} onChange={(e) => setSearchItem(e.target.value)} name="search" style={{float: 'right'}}/>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>width</th>
                        <th>height</th>
                        <th>depth</th>
                        <th>View</th> 
                    </tr>
                </thead>
                <tbody>
               
                    {
                    
                    filteredProducts.map((item) => {
                        
                        return (   
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.dimensions ? item.dimensions.width : 'N/A'}</td>
        <td>{item.dimensions ? item.dimensions.height : 'N/A'}</td>
        <td>{item.dimensions ? item.dimensions.depth : 'N/A'}</td>
                                <td><button type="button" onClick={()=>openUser(item.id)} class="btn btn-primary">
  View
</button></td>
                            </tr>
                        );
                    })} 
                </tbody>
            </table>                                     
               </div>

            {/* Modal */}
            {selectedUser && (  
                <div className="modal" style={{ display: 'block' }} onClick={closeModal}>
                    <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>     
                        <div className="modal-content">
                            <div className="modal-header">  
                                <h4 className="modal-title">{filter.title}</h4>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">    
                                {/* <p>{selectedUser.description}</p> */}
                                <p>Width: {selectedUser.dimensions?.width}</p>
                                <p>Height: {selectedUser.dimensions?.height}</p>
                                <p>Depth: {selectedUser.dimensions?.depth}</p>
                                 
                                 {filter.description}
                                 {filter.width}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Api1;
