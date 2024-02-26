import CardDetails from './CardDetails';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { API } from '../global';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import {useNavigate} from 'react-router-dom'

export default function UserCards() {
  const [users,setUsers] = useState([])
  // Function to fetch users from the API
  const getUsers = ()=>{
    axios.get(`${API}`)
    .then((response)=>setUsers(response.data))
  }  
  // Fetch users on component mount 
  useEffect(()=> getUsers(),[])
   // Function to handle user deletion
  const handleDelete =(id)=>{
    console.log("Delete ID is ", id)
    axios.delete(`${API}/${id}`)
    .then(()=>getUsers())
   
  }  
   // React router's navigation hook
  const navigate=useNavigate();
  return (
    <div className="card h-100">  
       {/* Displaying cards for each user */}
      {users.map((user,index)=>(<CardDetails key={index} user={user} id={user.id} 
       // Delete button
      deleteButton={
        <IconButton color="error" aria-label="Edit user details" onClick={()=>handleDelete(user.id)}>
       <p style={{fontSize:"18px"}}>Delete <DeleteIcon /></p>
      
        </IconButton>
      }  
      // Edit button        
      editButton={
        <IconButton color="success"  aria-label="Delete user"  onClick={()=>navigate(`/users/edit/${user.id}`)}>        
      <p style={{fontSize:"18px"}}>Edit<EditIcon /></p>
        </IconButton>
      } />
      ))}
   
    </div>     
  );
}