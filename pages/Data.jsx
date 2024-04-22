import axios from 'axios';
import React, { useEffect, useState } from 'react'

// import { getRegisteredStudentsAPI } from '../services/allAPIs';

function Data() {
    // const [registrationData, setRegistrationData] = useState([]);
    const [users,setUsers]=useState([])
    useEffect(() => {
      axios.get('http://localhost:5001/getUsers')
        .then(response => {
          // Check if the response data is an array
          if (Array.isArray(response.data)) {
            setUsers(response.data);
          } else {
            console.error('Response data is not an array:', response.data);
          }
        })
        .catch(err => console.error(err));
    }, []);
    

  return (
    <div>
    <h2 style={{textAlign:'center',color:'grey'}}>Registered Students Details</h2>
    <table style={{width:'100%',textAlign:'center'}}>
      <thead>
        <tr style={{backgroundColor:'gray',color:'white'}}>
          <th>Name</th>
          <th>Address</th>
          <th>Mobile</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody style={{backgroundColor:'bisque',color:'gray',lineHeight:'40px',border:'1px solid'}}>
        {users&&users.map((user,index)=>(
          <tr style={{border:'1px solid'}} key={index}>
            <td>{user.name}</td>
            <td>{user.address}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.dob}</td>
            <td>{user.course}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Data