
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
import Main from './Main';
import Home from './Home';

 import About from './About'
import Contact from './Contact'
import Review from './Review'
import Logins from './Logins';
import Feedback from './Feedback';
import Profile from './profile';


function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Main/>}></Route>
 <Route path="/feed" element={<Feedback/>}></Route>
 <Route path="/sign" element={<Logins/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
 <Route path="/co" element={<Contact/>}></Route>
 <Route path="/about" element={<About/>}></Route>
 <Route path="/home" element={<Home/>}></Route>
 <Route path="/review" element={<Review/>}></Route>

 <Route path="/profile" element={<Profile/>}></Route>

 
 
 </Routes>
</BrowserRouter>

  );
}

export default App;
