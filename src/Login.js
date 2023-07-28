import './Login.css';

import React, { Component } from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Login() {
  const[name,setName]=useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");
  const[contact,setCont] = useState("");
  const[city,setCity]=useState("");

  const navigate=useNavigate();
  const handleChange = async (e) => {
    e.preventDefault()
    try{
      const response= await axios
       .post('http://127.0.0.1:8080/api/v1/auth/register', {
           name: name,
           email: mail,
           password: password,
           contact: contact,
         });
           // Assuming your server responds with user data upon successful login
           if(response.status ===200){
             const user=response.data;
             
          
           navigate('/Home');
           setName('');
           setMail('');
           setPassword('');
           setCont('');
           }
     }
         catch(error) {
           console.error('Login failed:', error);
         };
 
        }

    return (
      <div className='box1'>
  
      <div class="box">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="https://tse3.mm.bing.net/th?id=OIP.Aj5hoLZFbrZyZnAslAUA2wHaHa&pid=Api&P=0&h=180" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div class="heading">
                <h2>Welcome</h2>
              
                <h6>Already have an account?  </h6>
                <Link to="/sign"><a href="#" class="toggle">Log In</a></Link><br></br>
              </div>

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text" onChange = {e => setName(e.target.value)}
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Name'
                    required
                  />
                  
                </div>

                <div class="input-wrap"> 
                  <input
                    type="password" onChange = {e => setPassword(e.target.value)}
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder="Password"
                    required
                  />
                  
                </div>
                <div class="input-wrap"> 
                  <input
                    type="email" onChange = {e => setMail(e.target.value)}
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Email'
                    required
                  />
                  
                </div>
                <div class="input-wrap"> 
                <input
                  type="Contact" onChange = {e => setCont(e.target.value)}
                  minlength="4"
                  class="input-field"
                  autocomplete="off"
                  placeholder='Contact'
                  required
                />
                
              </div>
              <div class="input-wrap"> 
              <input
                type="City" onChange = {e => setCity(e.target.value)}
                minlength="4"
                class="input-field"
                autocomplete="off"
                placeholder='City'
                required
              />
              
            </div>
            
              
                    
              

                <div class="text">
                <input type="checkbox"></input> By signing up, I agree to the Terms of Services and Privacy Policy
                </div>
                <br>
                </br>
                <Link to="/home"><button onClick={handleChange} class="signbtn">Sign Up</button></Link>
            
              </div>
            </form>

            
          </div>

          <div class="carousel">
            
            <img className="wall" style={{height:"500px"}} src="https://thumbs.dreamstime.com/b/bank-building-businessmen-dollar-coins-loan-approval-profit-concept-successful-business-male-characters-trendy-style-192921320.jpg"></img>

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
  }


export default Login