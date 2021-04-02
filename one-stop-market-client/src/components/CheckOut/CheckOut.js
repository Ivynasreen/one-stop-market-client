import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css'

const CheckOut = () => {
    const {name} = useParams();
    const [items , setItems] = useState([]);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    const selectedItem = items.find(item => item.name == name)
        console.log(selectedItem);

    useEffect (() => {
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
        .then(data => setItems(data))
    }, [])


    const handleOrder = () => {
        const newOrder = {...loggedInUser, ...selectedItem};
        fetch('http://localhost:5000/addOrder' , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
           <div>
                <h2>Checkout</h2>
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    <tr>
                        <td>{selectedItem?.name}</td>
                        <td>1</td>
                        <td>{selectedItem?.price}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>1</td>
                        <td>{selectedItem?.price}</td>
                    </tr>
                </table>
            </div>
            <br/>
            <div>
            <Link  to ={`/Orders/${name}`} className = "button" onClick = {()=> handleOrder(name)} style = {{color: 'white', textDecoration: 'none' , textAlign: 'right'}}>Check Out</Link>
            </div> 
        </div>
        
        
    );
};

export default CheckOut;