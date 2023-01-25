import { Box } from '@mui/material'
import React, { Component } from 'react'
import axios from 'axios'
export default class Service extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          name:"",
         typeofservice:""
          
          
        }
        this.handleSubmit=this.handleSubmit.bind(this)
      }
     
    
    
    handleSubmit(e){
      e.preventDefault()
      const form={
           name:this.state.name,
           typeofservice:this.state.typeofservice
      }
      axios({
        method: "POST",
        url: "http://localhost:8000/postservice",
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
  render() {
    return (
        <>
    
        <form className='d-flex justify-content-around' onSubmit={this.handleSubmit}>
            <Box sx={{marginTop:4,border:"2px groove green",padding:8,backgroundColor:"khaki",borderRadius:4}}>
    
            {/* <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter Name of Owner " />
        </Form.Group> */}
      <div className=" form-group mb-3 col-12">
        <label className='form-label'>Enter your Feedback Name</label>
        <input className='form-control' type="text" placeholder="Enter your name" onChange={(e)=>this.setState({name:e.target.value})} />
        <small className="text-muted">
          Write the name filled in Feedback Form
        </small>
        </div>

      <div className=" form-group mb-3 col-12" >
      <select class="form-select" aria-label="Default select example" onChange={(e)=>this.setState({typeofservice:e.target.value})}>
  <option selected>Open this select menu</option>
  <option value="Dexule">Dexule</option>
  <option value="Platinum">Platinum</option>
  <option value="Poor">Poor</option>
</select>
</div>
      <button className='btn btn-success'  type="submit">
            Submit
      </button>
      </Box>
    </form>
    </>
    )
  }
}


