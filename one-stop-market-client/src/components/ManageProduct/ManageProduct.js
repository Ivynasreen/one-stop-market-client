import React, {useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
const ManageProduct = () => {
    const [products , setProducts] = useState([]);
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);

    useEffect(()=> {
        fetch('http://localhost:5000/manageProduct?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=> setProducts(data))
    }, [])
    console.log(products)
    return (
            <div>
                <h3>Manage Product</h3>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Weight</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    {
                        products.map(product =>
                            <tr>
                                <td>{product.name}</td>
                                <td>1</td>
                                <td>{product.weight}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
    );
};

export default ManageProduct;