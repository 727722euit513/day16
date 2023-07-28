import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 220;
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: "300px",
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '29ch',
      },
    },
  },
}));
export default function SearchAppBar() {
  return (
    <>
    <div className='homehome'>
     <main>
    <div class="intro">
      <h1>Online Banking</h1>
      <p>Meet All Of Your Banking And Financial Needs</p>
      <button>Learn More</button>
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
  </div>

    <Box sx={{ flexGrow: 1 }} >
        <Box sx={{ display: 'flex'  }} >
      <CssBaseline />
      <Drawer 
        variant="permanent"
        sx={{
            width: 0,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        >
        <Toolbar />
        <Box >
         
         
         
          <List>
            {['Contact Us' ].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton component={Link}to='/co'>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {['Reviews' ].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton  component={Link}to='/review'>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
            </Box>
      </Drawer>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}style={{backgroundColor:"#16A085"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 6 }}
            >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrapcomponent="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >NIMA BANK
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
          <div > <Link  to="/feed"> <Button style={{textDecoration:"none",color:"white"}} color="inherit">Feedback</Button></Link></div>
        <div > <Link  to="/"> <Button style={{textDecoration:"none",color:"white"}} color="inherit">Profile</Button></Link></div>
        <div className='sss'> <Link style={{textDecoration:"none",color:"white"}} to="/sign"><Button color="inherit">Logout</Button></Link></div>

        
        </Toolbar>
      </AppBar>
      
      </Box>
    </Box>
    </>
  );
}
