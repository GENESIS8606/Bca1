import { Label } from "@mui/icons-material";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();
  var [inputs, setInputs] = useState({
    Admno: "",
    Name: "",
    Age: "",
    Course: "BCA",
  });
   
  var[selectedimage,setSelectedimage]=useState(null);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  };

  const handleimage=(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    console.log(file)
    inputs.Image1=file;
  }

  // const addHandler =() =>{
  //   console.log("Clicked")

  //   console.log(inputs)
  //   axios.post("http://localhost:3005/new",inputs)
  //   .then((response) =>{
  //     alert("Record Saved")
  //   })
  //   .catch(err=>console.log(err))
  // }
  const saveData =() =>{
    const formData=new FormData();
    formData.append('Admno',inputs.Admno);
    formData.append('Name',inputs.Name);
    formData.append('Age',inputs.Age);
    formData.append('Course',inputs.Course);
    formData.append('Image1',selectedimage)

    fetch('http://localhost:3005/new',{method:'post',body:formData})
    .then((Response)=>Response.json())
    .then((data)=>{
     alert("Recode saved")
    })
    .catch((err)=>{
    console.log("error")
    })
    
    
  }

  const viewHandler =() =>
  {
    navigate('/studentview');
  }

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
<label> Choose the file to upload </label>
<input type="file" onChange={handleimage}/>
      <br></br><br></br>
      <Button variant="contained" onClick={saveData}>Submit</Button>
      <Button variant="contained" onClick={viewHandler}>View</Button>
    </div>
  );
};

export default Student;
