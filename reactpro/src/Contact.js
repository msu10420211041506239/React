import { useState } from 'react'
import './Contact.css'
const Contact = () => {
  const [Data,setData]=useState('')
  function Added(){
    const address=document.getElementById("address").value
    const email=document.getElementById("email").value
    const mobile=document.getElementById("mobile").value
    if(!address || !email || !mobile){
      alert("All fields are must filled")
    }
    else{
         setData("Successfully purchased")
    }
  }

  return (
    <div>
      <h2>Give Your Address for Purchasing</h2>
      <input type='text' placeholder='Enter Address Here' required id='address'></input><br></br><br></br>
      <input type='gmail' placeholder='Enter Gmail' required id='email'></input><br></br><br></br>
      <input type='mobile' placeholder='Enter Mobilenumber' required id='mobile'></input><br></br><br></br>
      <button id='la' onClick={Added}>Submit</button>
      <h2 id='ll'>{Data}</h2>
    </div>

  )
}
export default Contact;



