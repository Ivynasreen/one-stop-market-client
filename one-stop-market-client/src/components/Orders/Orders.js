import React, {useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
const Orders = () => {
    const [orders , setOrders] = useState([]);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    useEffect(()=> {
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=> setOrders(data))
    }, [])
    console.log(orders)
    return (
            <div>
                <h3>Orders</h3>
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Order Date</th>
                    </tr>
                    {
                        orders.map(order =>
                            <tr>
                                <td>{order.name}</td>
                                <td>1</td>
                                <td>{order.weight}</td>
                                <td>{order.price}</td>
                            </tr>
                        )
                    }



                        
                </table>
            </div>
    );
};

export default Orders;