import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Studentedit = (props) => {
    var [inputs, setInputs] = useState(props.data);
    
      const inputHandler = (event) => {
        const { name, value } = event.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
        console.log(inputs);
      };
    
      const addHandler =() =>{
            console.log(props.method)
            if(props.method === 'put')
            {
                 axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
                .then((response) =>{
                alert("Success")
                window.location.reload(false);
                }
                
                )
                .catch(err=>console.log(err))
            }
        }
    //   const viewHandler =() =>
    //   {
    //     navigate('/studentview');
    //   }
    
      return (
        <div>
          <TextField
            id="outlined-basic"
            label="Admission Number"
            name="Admno"
            value={inputs.Admno}
            variant="outlined"
            onChange={inputHandler}
          />
          <br></br><br></br>
          <TextField
            id="outlined-basic"
            label="Name"
            name="Name"
            value={inputs.Name}
            onChange={inputHandler}
            variant="outlined"
          />
          <br></br><br></br>
          <TextField
            id="outlined-basic"
            label="Age"
            name="Age"
            value={inputs.Age}
            onChange={inputHandler}
            variant="outlined"
          />
          <br></br><br></br>
    
          <InputLabel id="demo-simple-select-label">Course</InputLabel>
          <Select
            label="Course"
            name="Course"
            value={inputs.Course}
            onChange={inputHandler}
          >
            <MenuItem value={"BCA"}>BCA</MenuItem>
            <MenuItem value={"BBA"}>BBA</MenuItem>
            <MenuItem value={"MBA"}>MBA</MenuItem>
          </Select>
          <br></br><br></br>
          <Button variant="contained" onClick={addHandler}>Submit</Button>
          {/* <Button variant="contained" onClick={viewHandler}>View</Button> */}
        </div>
      )
   
}
export default Studentedit
