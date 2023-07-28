import React from 'react';
import axios from 'axios';
import './Sign.css';
import { useState } from 'react';

import {Link, useNavigate} from 'react-router-dom';
import Cookies from "js-cookies"

function Sign() {
  const[name,setName] = useState("");
  const[mail,setMail] = useState("");
  const[password,setPassword] = useState("");
  const navigate=useNavigate();
  const handleChange = async(e) => {
    e.preventDefault()
    try{
      const response=await axios
         .post('http://127.0.0.1:8080/api/v1/auth/authenticate', {
           name: name,
           email: mail,
           password: password,

         });
         Cookies.get("name",name);
         navigate('/Home');
         let user=response.data.userResponse;
         let token =response.data.token;
         localStorage.setItem('token',token);
         localStorage.setItem('user',JSON.stringify(user))
         
        }
        catch(error) {
          console.error('Login failed:', error);
        };
      }
      
      
    
  return (
    
    <div className='box1'>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form  autoComplete="off" className="sign-in-form">
            <div class="logo">
            <img src="https://tse3.mm.bing.net/th?id=OIP.Aj5hoLZFbrZyZnAslAUA2wHaHa&pid=Api&P=0&h=180" alt="easyclass" />
            <h4>Register here!</h4>
          </div>

          <div class="heading">
            <h2>Welcome</h2>
           
            <br></br>
            
            
          </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text" onChange = {e => setName(e.target.value)}
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Name"
                    required
                    name="name" // Add 'name' attribute to each input element
                  />
                </div>

                <div className="input-wrap"> 
                  <input
                    type="password" onChange = {e => setPassword(e.target.value)}
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Password"
                    required
                    name="password" // Add 'name' attribute to each input element
                  />
                </div>
                <div className="input-wrap"> 
                  <input
                    type="email" onChange = {e => setMail(e.target.value)}
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Email"
                    required
                    name="email" // Add 'name' attribute to each input element
                  />
                </div>
                <br />
                <Link to="/">
                <button onClick={handleChange} class="btn">Log In</button>
                </Link>
              </div>
            </form>
          </div>
          <div className="carousel">
            <img className="wall" style={{ height: "500px" }} src="https://static.vecteezy.com/system/resources/previews/005/908/148/original/illustration-graphic-cartoon-character-of-bank-vector.jpg" alt="Bank Reception" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;