import React from 'react'
import './Navbar.scss'
import Flipplus from './images/plus_aef861.png'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';


const Nav = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  const navigate = useNavigate();
  const favPage = () => {
      navigate('/favpage')
  }
  const cartPage = () => {
    navigate('/addcart')
  }
  const handleCart = () => {
    navigate('/addcart')
  }


  return (
         
            <div className='navbar'>
                <div className='container'>
                  <div className='row'>
                  <div className='col-lg-8'>
                <div className='navFlip'>
                    <div className='navExplore'>
                    <h3>Flipkart</h3>
                    <Link to={"/"}>Explore Plus<span><img src={Flipplus} alt='logo'/></span></Link>
                   {/* <Link to={"/"}>Explore Plus<span><img src={Flipplus} alt='logo'/></span></Link> */}
                    
                    </div>
                   
                    <div className='nav-search'>
                       <input type='text' placeholder='Search Product'></input> 
                        <SearchIcon className='searchIcon'/>
                   </div>
                   <div className='login-btn'>
                  <button>Login</button>
                </div>
                </div>
                
                
                
              </div>
              <div className='col-lg-4'>
                <div className='navBarCart'>
                <div className='seller'>
                      <h4>Become a Seller</h4>
                  </div>
                  <div className='more'>
                  <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        More
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={favPage}>Wishlist</MenuItem>
        <MenuItem onClick={handleCart}>Cart</MenuItem>
      </Menu>
                  </div>
                  <div className='navCart'>
                      <ShoppingCartIcon />
                      <h3 onClick={() => cartPage()}>Cart</h3>
                  </div>
                </div>
                 
              </div>
                  </div>
              
                </div>
            </div>
   
  )
}

export default Nav