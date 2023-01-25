import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import { BrowserRouter as Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import Feedback from './Feedback';
import Service from './Service';

 function Users() {
const[name,setname]=useState([])


const fetchusers =() => {
  axios.get('http://localhost:8000/getcontact')
      .then(res=>{
  //  var data=res.data
         setname(res.data)
        //  console.log("json",data)
         
         
     
    

  })
}
// console.log("24",name)
  useEffect(()=>{
    fetchusers();
},[]);


 return (
    <>
    <div className='container' >
     <nav className="navbar navbar-expand-lg bg-light">'
     <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="navbar-nav">
      <Divider orientation="vertical" color="black">
        <Link to={'/feedback'} className="nav-link" >Feedback</Link>
        </Divider>
        <Link to={'/service'} className="nav-link">Services</Link>
        
        
      </div>
      
  {/* Dropdown */}
<Dropdown title="Customers">
{
  name.map((value=>{
    return(
      <>
               
                <Dropdown.Menu title={value.name} >
                  {
                    value.service.map((value1=>{
                      return(
                        <>
                    <Dropdown.Item >{value1.typeofservice}</Dropdown.Item>
                    
                    </>
                      )
                    }))
                  }
                    
                </Dropdown.Menu>
          
         </>
  
    )
  }))
}
</Dropdown>



</div>   


  </nav>
    </div>
   
    </>
 
  );
}
 
export default Users;
