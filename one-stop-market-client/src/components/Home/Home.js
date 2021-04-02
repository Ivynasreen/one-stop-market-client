import React, { useEffect, useState } from 'react';
import Grocery from '../Grocery/Grocery';


const Home = () => {
    const[products , setProducts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])

    return (
        <div style ={{marginLeft:'10px'}}className="row">
            {
                products.length===0 && <p><div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div></p>
            }
            {
               products.map(grocery =><Grocery grocery={grocery} key = {grocery.name}></Grocery>)
            }
        </div>
    );
};

export default Home;