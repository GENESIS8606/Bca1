import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useInsertionEffect } from "react";
import Studentedit from "./Studentedit";

const Studentview = () => {
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);
  var [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/view")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const updatevalues = (row) => {
    setSelected(row);
    setUpdate(true);
  };

 var result=
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Admission Number</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.Admno}
                  </TableCell>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell>{row.Age}</TableCell>
                  <TableCell>{row.Course}</TableCell>
                  <TableCell>
                    <EditIcon onClick={()=>updatevalues(row)}></EditIcon>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  if(update)
  {
    //console.log("sjkfksj")
    result=<Studentedit data={selected} method='put'/>
  }
  return(result)
};

export default Studentview;
