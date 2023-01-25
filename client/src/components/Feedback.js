import React,{Component} from 'react'
import {Box, Typography,TextField,Button} from '@mui/material'
import axios from 'axios'
 export default class Feedback extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      name:"",
      lastName:"",
      address:"",
      contact:"",
      
      
    }
    this.handleSubmit=this.handleSubmit.bind(this)
  }
 


handleSubmit(e){
  e.preventDefault()
  const form={
       name:this.state.name,
       lastName:this.state.lastName,
       address:this.state.address,
       contact:this.state.contact
  }
  
   
  // fetch("http://localhost:8000/appointment", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //        Accept: "application/json",
       
  //     },
  //     body: JSON.stringify({
  //      name:this.state.name,
  //      dateofappointment:this.state.dateofappointment,
  //      typeofpet:this.state.typeofpet,
  //      nameofpet:this.state.nameofpet

  //     })
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userRegister");
  //     });
  axios({
    method: "POST",
    url: "http://localhost:8000/postcontact",
    data:  form,
    headers: { "Content-Type": "application/json" },
})
.then(function (response) {
    console.log(response.data);
    console.log()
    if(response.data.status="Successfully submitted"){
        window.location.href="http://localhost:3000/successful"
    }

})
.catch(function (error) {
    console.log(error);
});
}



render(){
  return (
    <React.Fragment>
        
<Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        display:"inline-block",backgroundColor:"grey", justifyContent:"center",marginTop:5,border:"10px outset",borderRadius:8,padding:5,width:'60%'
      }}
    
    >
      <div>
        <Typography variant="h5" padding={3} color="silver" > Feedback Form</Typography>
        <form onSubmit={this.handleSubmit} >
        <div className='form-group mb-3 col-10'>
          <label className='form-label float-left' style={{color:"silver"}}>Enter the first name</label>
          <input className='form-control'
          
          
          placeholder="Enter Name"
          type="text"
          onChange={(e)=>this.setState({name:e.target.value})}
          />
          </div>
        {/* <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        /> */}
       <div className='form-group mb-3 col-10'>
          <label className='form-label float-left' style={{color:"silver"}}>Enter the last name</label>
          <input className='form-control'
          id="outlinedinput"
          placeholder="Enter the the last name"
          type="text"
          onChange={(e)=>this.setState({lastName:e.target.value})}
          />
           </div>
           <div className='form-group mb-3 col-10'>
          <label className='form-label float-left' style={{color:"silver"}}>Enter the address</label>
          <input className='form-control'
           required
          id="outlinedinput"
          label="Enter type of address"
          placeholder='Enter address'
          type="text"
          onChange={(e)=>this.setState({address:e.target.value})}
          
          />
           </div>
           <div className='form-group mb-3 col-10'>
          <label className='form-label float-left' style={{color:"silver"}}>Enter the contact address</label>
          <input className='form-control' required
          id="outlinedinput"
          type="text"
          placeholder='Enter the contact number'
          onChange={(e)=>this.setState({contact:e.target.value})}
          />
          </div>
          <br></br>
        <button className='btn btn-info col-5' sx={{marginTop:2,}}
        type="Submit" 
        >Submit</button>
          </form>
         </div>
         
    </Box>
        

    </React.Fragment>
  )
}
}

