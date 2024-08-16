import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import './details.scss';
import Button from "@mui/material/Button";
import img from "../CardDetails/images/fa_62673a.png";
import { stateContext } from "../stateContext";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Details = () => {
  const {
    state: { getDetails },
    dispatch,
  } = useContext(stateContext);
  console.log(getDetails);

  const navi = useNavigate();
  const addcart = (value) => {
    dispatch({type:"ADD", payload:value});
    navi("/addcart");
  };
  const buynow = (value) => {
    dispatch({ type: "BUY", payload: value });
    navi("/buy");
  };
  // const favourite = (value) =>{
  //   navi("/favpage")
  //   dispatch({
  //     type:"FAV",
  //     payload:value,
  //   })
  // }

  return (
    <>
      <div className="details">
        <div className="container">
          <div className="row">
            {[getDetails]?.map((value, index) => {
              return (
                <>
                  <div className="col-lg-4" key={index}>
                    <div className="details-img">
                      <div className="imgFav">
                        <div className="detailFav">
                        {/* <FavoriteBorderIcon className="detailFavIcon" onClick={()=>favourite(value)} checked={value.isFav}/> */}
                        </div>
                      <img src={value.image} />
                      </div>
                      
                      
                      <div className="detail-btn">
                        <Button
                          variant="contained"
                          className="btn"
                          onClick={() => addcart(value)}
                        >
                          <Icon
                            icon="jam:thunder-f"
                            style={{ fontSize: "22px" }}
                          />
                          ADD TO CARD
                        </Button>
                        <Button
                          variant="contained"
                          className="btn1"
                          onClick={() => buynow(value)}
                        >
                          <Icon
                            icon="jam:thunder-f"
                            style={{ fontSize: "22px" }}
                          />
                          BUY NOW
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="details-content">
                      <h3>{value.head}</h3>
                      <p>{value.sub}</p>
                      <div className="amount1">
                        <h4>
                          {value.rating}
                          <Icon icon="ic:round-star-rate" />
                        </h4>
                        <p>{value.rate}</p>
                        <h5>
                          <img src={img} style={{ width: "25%" }}></img>
                        </h5>
                      </div>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="amount"
                      >
                        <h1>{value.price}</h1>
                        <h3 style={{ color: "#cac7c7" }}>
                          <del>{value.offer}</del>
                        </h3>
                        <h3 style={{ color: "green" }}>
                          59% of{" "}
                          <Icon icon="solar:danger-circle-bold-duotone" />
                        </h3>
                      </Typography>

                      {/* color-conent */}
                      {/* <div className="color" style={{ display: "flex" }}>
                        <div className="col-lg-4">
                          <h4>Color</h4>
                        </div>
                        <div className="col-lg-8">
                          <div className="color-img row">
                            <img src={value.imageColor1} />
                            <img src={value.imageColor2} />
                            <img src={value.imageColor3} />
                          </div>
                        </div>
                      </div> */}

                      {/* Highlights */}

                      <div className="highlight" style={{ display: "flex" }}>
                        <div className="col-lg-4">
                          <h4>Highlights</h4>
                        </div>
                        <div className="col-lg-8">
                          <div className="highlight-content row">
                            <ul>
                              <li>{value.mic}</li>
                              <li>{value.version}</li>
                              <li>{value.driver}</li>
                              <li>{value.battery}</li>
                              <li>{value.type}</li>
                             
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="Specification-section">
                          <div className="specifi-head">
                             <h3>Specification</h3>
                             <div className="sub-head">
                                 <h4>General</h4>
                                 <div className="table">
                                     <table>
                                       <tr>
                                          <td>ModelName</td>
                                          <td className="det">{value.model}</td>
                                       </tr>
                                       <tr>
                                          <td>Color</td>
                                          <td className="det">{value.color}</td>
                                       </tr>
                                       <tr>
                                          <td>Headphones Type</td>
                                          <td className="det">{value.phonetype}</td>
                                       </tr>
                                       <tr>
                                          <td>Inline Remote</td>
                                          <td className="det">{value.remote}</td>
                                       </tr>
                                       <tr>
                                          <td>Sales Package</td>
                                          <td className="det">{value.package}</td>
                                       </tr>
                                       <tr>
                                          <td>Connectivity</td>
                                          <td className="det">{value.connective}</td>
                                       </tr>
                                     </table>
                                 </div>
                             </div>
                          </div>
                          <div className="read">
                              <h4><a href="#">Read More</a></h4>
                          </div>
                      </div>

                      {/* Specification */}

                      {/* <div className="specific">
                        <div className="col-lg-12">
                          <h3>Specification</h3>
                          <hr></hr>
                        </div>
                        <div className="specific-content">
                          <h4>General</h4>
                          <div className="row">
                            <div className="col-lg-4">
                              <p>ModelName</p>
                            </div>
                            <div className="col-lg-8">
                              <p>{value.model}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <p>Color</p>
                            </div>
                            <div className="col-lg-8">
                              <p>{value.color}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <p>Headphones Type</p>
                            </div>
                            <div className="col-lg-8">
                              <p>{value.phonetype}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <p>Inline Remote</p>
                            </div>
                            <div className="col-lg-8">
                              <p>{value.remote}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <p>Sales Package</p>
                            </div>
                            <div className="col-lg-8">
                              <p>{value.package}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <p>Connectivity</p>
                            </div>
                            <div className="col-lg-8">
                              <p>{value.connective}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <p>Headphone Design</p>
                            </div>
                            <div className="col-lg-8">
                              <p>{value.design}</p>
                            </div>
                          </div>
                          <hr></hr>
                          <a href="#">Read More</a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
