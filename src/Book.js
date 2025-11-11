import React from "react";


const Book =(props) =>{
    const {imgUrl,name,cost,bookName,btnName} = props;
    return(
    
        <div class="cards">
        <img src={imgUrl} alt='img txt'/>
        <p className='title'>{name || 'alternative name'} </p>
        <p className='cost'>{cost || 'alternative cost'}</p>
        <p>{bookName || 'alternative book name'}</p>
        <button className="btn btn-primary">{btnName} </button>
    </div>
    
    );
}

export default Book;