import React  from "react";
const Products = () =>{
    
    const studentData = [{"id":1,imgurl:"https://thumbs.dreamstime.com/b/child-girl-schoolgirl-elementary-school-student-123686003.jpg","name":"John Doe","age":20,"gender":"Male",email:"john.doe@example.com"},
        {"id":2,"name":"Aswini","age":25,"gender":"FeMale",email:"Aswini@example.com",imgurl:'https://static9.depositphotos.com/1594308/1251/i/450/depositphotos_12519956-stock-photo-cute-kid.jpg'},
        {"id":3,"name":"Mani","age":23,"gender":"FeMale",email:"Mani@example.com",imgurl:"https://www.shutterstock.com/image-photo/kids-go-back-school-children-600nw-2188141611.jpg"},
    ]
    const TeachersDats =[
        {"id":1,"name":"Ranjith","age":20,"gender":"Male",email:"john.doe@example.com"},
        {"id":2,"name":"shiva","age":22,"gender":"Male",email:"shiva@example.com"},
        {"id":3,"name":"nagababu","age":23,"gender":"Male",email:"Nagu@example.com"}
    ]
    return(  
        <div className="container">
            <h2>Welcome to Products</h2>
            <div className="data">
            <div className="row">
                {studentData.map((value,index)=>{
                    return (
            <div className="col-md-4">
            <div className="card" style={{textAlign:'center'}}>
                <div className="card-title">
                    <h4>{value.id}</h4>
                    <img style={{width:'95%'}} alt="hello" />
                    <h3>{value.name}</h3>
                    <span>{value.age}</span>
                    <p>{value.gender}</p>
                    <h3>{value.email}</h3>
                </div>
                <div className="card-body">
                    fhsdkghdfk
                </div>
            </div>
            </div>
                    )
                })}
                
        {TeachersDats.map((item,index)=>{
        return (
            <div className="col-md-4">
            <div className="card" style={{textAlign:'center'}}>
                <div className="card-title">
                    <h4>{item.id}</h4>
                    <h3>{item.name}</h3>
                    <span>{item.age}</span>
                    <p>{item.gender}</p>
                    <h3>{item.email}</h3>
                </div>
                <div className="card-body">
                    fhsdkghdfk
                </div>
            </div>
            </div>
            
        );

        
    } )}
                
                
        </div>
        </div>
        </div>
    )
}
    


export default Products;