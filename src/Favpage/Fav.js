import React, { useContext } from 'react'
import './Fav.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Icon } from '@iconify/react';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import person from './images/person.png'
import img from './images/fa_62673a.png'
import { stateContext } from '../stateContext';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const Fav = () => {
  const {state:{card, favourite}, dispatch} = useContext(stateContext);
  console.log(card);
  console.log(favourite);
  return (
    <div className='container-3'>
      <div  className='row3'>
      <div className='account-detail'>
        <div className='account '>
            <div className='acc-img'>
                <img src={person} alt='img'/>
            </div>
            <div className='acc-name'>
                <p>Hello,</p>
                <h5>Premkumar M</h5>
            </div>
        </div>

        <div className='order'>
            <div className='odd'> 
              <FolderIcon className='odd-icon'/>
              <p>MY ORDERS</p>
            </div>
            <div className='odd1'> 
              <PersonIcon className='odd-icon'/>
              <p>ACCOUNT SETTING</p>
            </div>
            <div className='odds'>
               <p>Profile Information</p>
               <p>Manage Addresses</p>
            </div>
            <div className='odd'> 
              <FolderIcon className='odd-icon'/>
              <p>Logout</p>
            </div>

        </div>
           
        </div>
        <div className='fav'>
            <h3>My Wishlist</h3>
        {favourite.flat()?.filter(e=> e.isFav === true)?.map((value,index)=>{
            return<>
               
            {/* <div className='product-bot'>
             </div> */}
             <div className='wishlist'>
             <div className='fav-list'>
                <div className='fav-img'>
                  <img src={value.image} alt='lap'/>
                </div>
            
                  <div className='fav-detail'>
                  <div className='title'>
                      <h5>{value.head}</h5>
                       <p>{value.sub}</p>
                  </div>
                     <div className='star'>
                       <p className='rate'>{value.rating}<Icon className='rate-icon' icon="material-symbols:star-rounded" width="20" height="20" /></p>
                       <p>{value.rate}</p>
                       <img src={img} width="120px" height="auto" alt=''/>
                     </div>
                     <div className='amount'>
                      <h2><CurrencyRupeeIcon />{value.price}</h2>
                      <p><del>{value.offer}</del></p>
                      <h4>59% of</h4>
                     </div>
                  </div>  
             </div>
             <div className='dlt-icon'>
                  <DeleteIcon onClick={() =>dispatch({type:'UNFAVORITE',payload:value})}/>
             </div>
             </div>
            </>
        })}
        
         </div> 
        
      </div>
    </div>
  )
}

export default Fav