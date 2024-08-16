import React, { useContext, useState } from 'react'
import './Buy.scss'
import fplogo from '../Buypage/image/fa_62673a.png'
import ErrorIcon from '@mui/icons-material/Error';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import star from '../Buypage/image/plus_aef861.png'
import party from './image/party.jpg'
import { stateContext } from '../stateContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Buy = () => {

    const {state:{buy},dispatch} = useContext (stateContext);
    console.log(buy)

    const [qty, setQty] = useState(1)

    const increment = (id) =>{
        buy.qty+=1;
        setQty(buy.qty)
    }
   
    const decrement = (id) => {
       if(buy.qty > 1){
        buy.qty-=1;
        setQty(buy.qty)
       } 
    }
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div style={{backgroundColor:"#f1f3f6"}} >
            {/* <div className='col-lg-12'>
                <div className='buy-nav'>
                    <h3>Flipkart</h3>
                    <p>Explore<span>Plus</span><img src={star} width='12px' height='auto' alt='' /></p>
                </div>
            </div> */}
               <div className='buy-container'>
                    <div className='row'>
                    {[buy]?.map((value,index) => {

                           return <>
                                 <div className='col-lg-9'>
                        <div className='buy-detail'>
                            <div className='buy-log'>
                                <button>1</button>
                                <div className='buy-add'>
                                <h4>LOGIN</h4>
                                <p>Premkumar M <span>+9087654321</span></p>
                                </div>
                               
                            </div>
                            <div className='buy-change'>
                                <button>CHANGE</button>
                            </div>

                        </div>
                        <div className='buy-detail'>
                            <div className='buy-log'>
                                <button>2</button>
                                <div className='buy-add'>
                                <h4>DELIVERY ADDRESS</h4>
                                <p>Premkumar <span>79/15, Alangulam Road, Keelapavoor.</span></p>
                                </div>
                               
                            </div>
                            <div className='buy-change'>
                                <button>CHANGE</button>
                            </div>

                        </div>
                        <div className='buy-detail1'>
                            <div className='buy-log1'>
                                <button>3</button>
                                <div className='buy-add'>
                                    <h4>ORDER SUMMARY</h4>
                                </div>
                               
                            </div>
                          

                        </div>
                        
                        <div className='buyAddProduct'>
                                <div className='buy-img'>
                                    <img src={value.image}/>
                                   <div className='buy-input'>
                                        <button onClick={() => decrement(value.id)}>-</button>
                                        <input type='text' readOnly value={value.qty}></input>
                                        <button style={{cursor: 'pointer'}} onClick={() => increment(value.id)}>+</button>
                                    </div> 
                                   
                                </div>
                                <div className='buyAddDetail'>
                                    <h3>{value.head}</h3>
                                   <div className='ad'> 
                                        <p>{value.sub}</p>
                                        <img src={fplogo} width='80px' height='auto' alt='logo'/>
                                   </div>
                                   <div className='buy-amount'>
                                        <h4><del>{value.offer}</del></h4>
                                        <h3>{value.price}</h3>
                                        <h5>{value.discount}% off<span><ErrorIcon /></span></h5>
                                        
                                   </div>
                                   <div className='pay'>
                                        <h4>Or Pay ₹999 +</h4>
                                        <h5><span><OfflineBoltIcon /></span>30</h5>
                                   </div>
                                   <div className='remove'>
                                        <h5>REMOVE</h5>
                                   </div>
                                   
                                </div>
                        </div>
                            <div className='buy-submit'>
                                <p>premkumar64412@gmail.com</p>
                                <Button variant="outlined" onClick={handleClickOpen}>
        SUBMIT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          SUCESSS
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <img src={party} alt="img"/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} autoFocus>
           Ok
          </Button>
        </DialogActions>
      </Dialog>
                            </div>
                        </div>
                        <div className='col-log-3'>
                            <div className='buy-price'>
                                <h4>PRICE DETAILS</h4>
                                <hr></hr>
                                <div className='product-price'>
                                    <p>Price</p>
                                    <p>{ value.qty * (value.price)}</p>
                                </div>
                                <div className='product-price'>
                                    <p>discount</p>
                                    <p>-{Math.round(value.price * value.discount/100) * qty}</p>
                                </div>
                                <div className='product-price'>
                                    <p>Delivery Charges</p>
                                    <p>FREE</p>
                                </div>
                                <div className='product-price'>
                                    <p>Total Payable</p>
                                    <p>{Math.round(value.price * (100 - value.discount)/100) * qty}</p>
                                </div>
                            </div>
                        </div>
                            </>
                        })}
                       
                        
                    </div>
                </div>
        </div>
      )
    }
export default Buy




