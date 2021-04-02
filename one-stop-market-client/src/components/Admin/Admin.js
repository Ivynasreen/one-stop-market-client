import React, { useContext } from 'react';
import '../../components/AddProduct/AddProduct';
import '../../components/ManageProduct/ManageProduct'
import './Admin.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Admin = () => {
  const [loggedInUser , setLoggedInUser] = useContext(UserContext)  
  return (
      <div>
          <div className = "col-md-3">
            <Link to ="/AddProduct">Add Product</Link>
            <br/>
            <Link to ="/ManageProduct">Manage Product</Link>
       </div>
      </div>
  );
};

export default Admin;
