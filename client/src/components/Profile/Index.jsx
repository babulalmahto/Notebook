import {useEffect, useState} from 'react'
import "./style.css";
const Index = () => {

    const [user, setUser] = useState([]);
    useEffect(() =>{
        setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    
  return (
    <div className='profile-container'>
        <h1>Profile</h1>
        {/*<pre>{JSON.stringify(user)}</pre>*/}
        <h3>First Name:<span>{user.firstname}</span></h3>
        <h3>Last Name: <span>{user.lastname}</span></h3>
        <h3>DOB: <span>{JSON.stringify(user.dateOfBirth)}</span></h3>
        <h3>Email ID: <span>{user.emailId}</span></h3>
        <h3>Password: <span>
        { 
          String(user.password).slice(-1).padStart(5, "#")
        }
        </span></h3>
        <h3>Phone No: <span>{user.phoneNumber}</span></h3>
        <h3>Gender: <span>{user.gender}</span></h3>
        <h3>Occupation: <span>{user.occupation}</span></h3>
        <h3>Country : <span>{user.country}</span></h3>
        <h3>InterestedIn :<span>{user.interestedIn}</span></h3>
        <button type="button" className='btn-edit'>Edit</button>
        <button type="button" className='btn-edit'>SignOut</button>
    </div>
  )
}

export default Index 