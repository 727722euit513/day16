import React from 'react'
import './Main.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="styles.css" />
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
</head>

<body>
  <header class="header">
  <div class="logo">
                <img src="https://tse3.mm.bing.net/th?id=OIP.Aj5hoLZFbrZyZnAslAUA2wHaHa&pid=Api&P=0&h=180" alt="easyclass" />
                <h4>Nima Bank</h4>
              </div>
    <nav class="nav-items">
      <a href="/Home">Home</a>
    <Link to="/about"><a href="#">About Us</a></Link>
    <Link to="/co"><a href="#">Contact Us</a></Link>
    <Link to="/sign"><a href="#">Logout</a></Link>
    <Link to="/login"><a href="#">Sign Up</a></Link>

    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>Online Banking</h1>
      <p>Meet All Of Your Banking And Financial Needs</p>
      
    </div>
    <div class="achievements">
      <div class="work">
        <i class="fas	fa-thumbs-up"></i>
        <p class="work-heading">Reviews</p>
        <p class="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
      </div>
      <div class="work">
        <i class="far	fa-folder"></i>
        <p class="work-heading">Profile</p>
        <p class="work-text">Established in 1911, Central Bank of India was the first Indian commercial bank which was wholly owned and managed by Indians.</p>
      </div>
      <div class="work">
        <i class="fas	fa-receipt"></i>
        <p class="work-heading">Receipt</p>
        <p class="work-text">A bank receipt includes all of the information relative to the financial transactions conducted during your visit to the bank.</p>
      </div>
      <div class="work">
        <i class="fas	fa-money-check"></i>
        <p class="work-heading">Cards</p>
        <p class="work-text">Banks are payment cards the banks issue to customers. This type of card can include debit, ATM, and credit cards.</p>
      </div>
      <div class="work">
        <i class="far	fa-heart"></i>
        <p class="work-heading">Loan</p>
        <p class="work-text">A loan is financial assistance obtained by borrowers for personal, medical, or other purposes from a financial institution like a bank.</p>
      </div>
    </div>
    <img style={{height:"450px",width:"1700px"}} src="https://cdn.dribbble.com/users/746845/screenshots/2752082/___.gif" alt="easyclass" />
    <div class="about-me">
      <div class="about-me-text">
        <h2>About Us</h2>
        <p>
    Nima (NM) a Fortune 500 company, is an Indian Multinational, Public Sector Banking and Financial services statutory body headquartered in Mumbai. The rich heritage and legacy of over 200 years, accredits SBI as the most trusted Bank by Indians through generations.</p>
<p>
NM, the largest Indian Bank with 1/4th market share, serves over 45 crore customers through its vast network of over 22,000 branches, 62617 ATMs/ADWMs, 71,968 BC outlets, with an undeterred focus on innovation, and customer centricity, which stems from the core values of the Bank - Service, Transparency, Ethics, Politeness and Sustainability.</p>
<p>
The Bank has successfully diversified businesses through its various subsidiaries i.e NM General Insurance, NM Life Insurance, NM Mutual Fund, NM Card, etc. It has spread its presence globally and operates across time zones through 229 offices in 31 foreign countries.</p>
<p>
Growing with times, NM continues to redefine banking in India, as it aims to offer responsible and sustainable Banking solutions..
</p>
      </div>
      <img src="https://wikiclipart.com/wp-content/uploads/2016/11/Bank-clipart-bank-clip-art-image-5.gif" alt="me"></img>
    </div>
  </main>
  <h2><center>Need Assistance?</center></h2>
  <div class="achievements">
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://tse4.mm.bing.net/th?id=OIP.u4pXs2DntslbJmHEbFb0MgAAAA&pid=Api&P=0&h=180" />
        <p class="work-heading">Toll Free Number</p>
        <p class="work-text">1800 5700</p>
      </div>
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://tse4.mm.bing.net/th?id=OIP.yyXZp_-RviSfx1lE_4oxZAHaHa&pid=Api&P=0&h=180" />
        <p class="work-heading">Need Assistance</p>
        <p class="work-text">Our BC Agent</p>
      </div>
      <div class="work">
      <img style={{height:"100px",width:"110px"}} src="https://tse2.mm.bing.net/th?id=OIP.MS61siTlhozxXXMqAmQS8wHaGx&pid=Api&P=0&h=180" />
        <p class="work-heading">Locate</p>
        <p class="work-text">Our Branch</p>
      </div>
    </div>
  <footer class="footer">
    <div class="copy">© Nima Bank Of India</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy policy</a>
        <a href="#">FAQ</a>
        <a href="#">Contact Information</a>
      </div>
      <div class="links">
        <span>Social Links</span>
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </footer>
</body>
</html>
  
)
}

export default Main