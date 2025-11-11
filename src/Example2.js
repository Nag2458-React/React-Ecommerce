import React from 'react';
import Book from './Book.js';
const Example2= ()=>{
    const data = [
                    {imgUrl :'https://gramentheme.com/html/bookle/assets/img/book/03.png',
                     name :'Flovely and Unicom',
                     cost :'256',
                     bookName : 'First Book',
                     btnName : 'Click Here'
                    },
                    {imgUrl :'https://gramentheme.com/html/bookle/assets/img/book/05.png',
                        name :'Qple GPad With Retina ',
                        cost :'230',
                        bookName : 'Second Book',
                        btnName : 'Not Available'
                    },
                    {imgUrl :'https://gramentheme.com/html/bookle/assets/img/book/04.png',
                        name :'shenfk and Unicom',
                        cost :'345',
                        bookName : 'Third Book',
                        btnName : 'Read More'
                    },
                    {imgUrl : 'https://gramentheme.com/html/bookle/assets/img/book/01.png',
                        name :'nagababu',
                        cost:'233',
                        bookName : 'Fourth Book',
                        btnName : 'Click Here'

                    }
                 ];
    return (
        <div className='container'>
        <h2>Welcome Props Example Two</h2>
        <div className='row'>
        {data.map((eachObj,index)=>{
            const {imgUrl,name,cost,bookName,btnName} = eachObj;
           
            return (
               <div className='col-md-3'>
                <Book 
                imgUrl={imgUrl}
                name ={name}
                cost ={cost}
                bookName={bookName}
                btnName={btnName}
                />
               </div>
            );
            
        })}
        </div>
           
        </div>
        );
}
// const Book =(props) =>{
//     const {imgUrl,name,cost,bookName} = props;
//     return(
    
//         <div class="cards">
//         <img src={imgUrl} alt='img txt'/>
//         <p className='title'>{name} </p>
//         <p className='cost'>{cost}</p>
//         <p>{bookName}</p>
//     </div>
    
//     );
// }
export default Example2;