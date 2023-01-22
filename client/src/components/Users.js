import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


 function Users() {
const[name,setname]=useState([])


const fetchusers =() => {
  axios.get('http://localhost:8000/getcontact')
      .then(res=>{
    
         setname(res.data)
         
         
     
    

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
      <div className="dropdown">
      
       
  
{
  name.map((value)=>{
    
    return(
      <>
      <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
    data-mdb-toggle="dropdown" aria-expanded="false">
    Customer
    </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {/* <li><a class="dropdown-item" href="#">Action</a></li>
        <li>
          <a class="dropdown-item" href="#">Another action</a>
        </li> */}
        <li>
          <div><a class="dropdown-item" href="#">
            {value.name} &raquo;
          </a>
          </div>
         
           {
              value.service.map((value1)=>{
                console.log(value1)
                return(
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
          <a class="dropdown-item" href="#">TypesOfService &raquo; </a>
          <ul class="dropdown-menu dropdown-submenu">
            <li>
            </li>
            
              <a class="dropdown-item" href="#">{value1.typeofservice}</a>
              
            </ul>
              </li>
              </ul>
                )
                
              })
              }
              
           
              
           
                
            
            
           
          
        </li>
      </ul>
     </>
    
    )
  })
}
</div>
</div>   
  </nav>
    </div>
    </>
 
  );
}
 
export default Users;
