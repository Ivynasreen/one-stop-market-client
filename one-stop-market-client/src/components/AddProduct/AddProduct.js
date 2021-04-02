import React from 'react';
import axios from 'axios';
import  { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL , setImageURL] = useState(null);


  const onSubmit = data => {
      const productData = {
        name: data.name,
        weight: data.weight,
        imageURL: imageURL,
        price: data.price
    }
    console.log(data)

    const url = `http://localhost:5000/addProduct`;
    console.log(productData)
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => console.log('server side response', res))
  };
  const handleImageUpload = product => {
    console.log(product.target.files[0])
    const imageData = new FormData();
    imageData.set('key' , '8049a7bec90db17809ced82f236506a4')
    imageData.append('image' , product.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      console.log(response.data.data.display_url);
      setImageURL(response.data.data.display_url)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
    return (
        <div class = "row">
            <div className = "col-md-3">
            <Link to ="/AddProduct">Add Product</Link>
            <br/>
            <Link to ="/ManageProduct">Manage Product</Link>
            </div>
            <hr/>
            <div className= "add-product col-md-9">
            <h4>Add Product</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className = "product-name">
                <label htmlFor="name">Product Name</label>
                <br/>
                <input class = "form-control" name="name" defaultValue="Enter Name" type = "text" ref = {register}/>
                </div>
                <div className = "product-weight">
                <label htmlFor="weight">Weight</label>
                <br/>
                <input  class = "form-control" name="weight" defaultValue="Enter Name" type = "text" ref = {register}/>
                </div>
                <div className = "product-price">
                <label htmlFor="price">Add Price</label>
                <br/>
                <input class = "form-control" name="price" defaultValue="Enter Price" type = "text" ref = {register}/> 
                </div>
                <div className = "photo">
                <label htmlFor="photo">Add photo</label>
                <br/>
                <input placeholder ="uploadPhoto" type = "file" onChange = {handleImageUpload} />
                </div>
                <br/>
                <input type="submit" value = "Save" />
            </form>
            </div>
      </div>
       
    );
};

export default AddProduct;