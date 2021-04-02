import React from 'react';
import './Grocery.css';
import { Link, useHistory } from 'react-router-dom';

const Grocery = (props) => {
    // console.log(props)
    const {name , weight , price , imageURL} = props.grocery;
    let history = useHistory();
    const handleCheckOut = name => {
        const url = `groceries/${name}`;
        history.push(url)
    }
    return (
        <div className="col-md-4 grocery">
            <img style={{height: '200px'}} src= {imageURL} alt=""/>
            <h5>{name} - {weight}</h5>
            <h5 className = "price">{price}<span><Link  to ={`/CheckOut/${name}`} className = "button" onClick = {()=> handleCheckOut(name)} style = {{color: 'white', textDecoration: 'none'}}>Buy Now</Link></span></h5>
            
        </div>
    );
};

export default Grocery;