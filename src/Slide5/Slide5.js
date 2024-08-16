import React, { useContext, useState } from "react";
import './Slide5.scss'
import fplogo from "../Buypage/image/fa_62673a.png";
import comp from "../Buypage/image/-original-imagg5jscr4hcuqc.webp";
import ErrorIcon from "@mui/icons-material/Error";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import star from "../Buypage/image/plus_aef861.png";
import { stateContext } from "../stateContext";
import { useNavigate } from "react-router-dom";

const Slide5 = () => {
  const {
    state: { add },
    dispatch,
  } = useContext(stateContext);
  console.log(add);
  const [qty,setQty] = useState(1)

  const navigate = useNavigate();
 
  const increment = () => {
   add.qty+=1;
   setQty(add.qty)
  }
  const decrement = () => {
    if(add.qty > 1){
      add.qty=1;
      setQty(add.qty)
    }
  }

  return (
    <div style={{ backgroundColor: "#f1f3f6" }}>
      <div className="add-container">
        <div className="row">
          {[add]?.map((value, index) => {
            return (
              <>
                <div className="col-lg-9">
                  <div className="add-detail">
                    <h3>Flipkart</h3>
                    <h3>Grocery</h3>
                  </div>
                  <div className="add1-detail">
                    <h4>From saved Address</h4>
                    <button>Enter Delivery Pincode</button>
                  </div>
                  {/* <div className='buy-detail1'>
                            <div className='buy-log1'>
                                <button>3</button>
                                <div className='buy-add'>
                                    <h4>ORDER SUMMARY</h4>
                                </div>
                               
                            </div>
                          

                        </div> */}
                  <div className="buyAddProduct">
                    <div className="buy-img">
                      <img src={value.image} />
                      <div className="buy-input">
                        <button onClick={()=>decrement(value.id)}>-</button>
                        <input type="text" readOnly value={value.qty}></input>
                        <button onClick={()=>increment(value.id)}>+</button>
                      </div>
                    </div>
                    <div className="buyAddDetail">
                      <h3>{value.head}</h3>
                      <div className="ad">
                        <p>{value.sub}</p>
                        <img
                          src={fplogo}
                          width="80px"
                          height="auto"
                          alt="logo"
                        />
                      </div>
                      <div className="buy-amount">
                        <h4>
                          <del>{value.offer}</del>
                        </h4>
                        <h3>{value.price}</h3>
                        <h5>
                          50 % off
                          <span>
                            <ErrorIcon />
                          </span>
                        </h5>
                      </div>
                      <div className="pay">
                        <h4>Or Pay {value.price} +</h4>
                        <h5>
                          <span>
                            <OfflineBoltIcon />
                          </span>
                          30
                        </h5>
                      </div>
                      <div className="remove">
                        <h5>REMOVE</h5>
                      </div>
                    </div>
                  </div>
                  <div className="add-submit">
                    <button>PLACE ORDER</button>
                  </div>
                </div>
                <div className="col-log-3">
                  <div className="buy-price">
                    <h4>PRICE DETAILS</h4>
                    <hr></hr>
                    <div className="product-price">
                      <p>Price</p>
                      <p>{value.qty * (value.price)}</p>
                    </div>
                    <div className='product-price'>
                        <p>discount</p>
                        <p>-{Math.round(value.price * value.discount/100) * qty}</p>
                     </div>
                    <div className="product-price">
                      <p>Delivery Charges</p>
                      <p>FREE</p>
                    </div>
                    <div className="product-price">
                      <p>Total Payable</p>
                      <p>{Math.round(value.price * (100 - value.discount)/100) * qty}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Slide5;
