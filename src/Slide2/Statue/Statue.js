import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import img from "../images/fa_62673a.png";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../../stateContext";

const options = ["₹500", "₹1500", "₹2500", "₹3500", "₹5000"];
const onOptionChangeHandler = (event) => {
  console.log("User Selected Value - ", event.target.value);
};

function valuetext(value) {
  return `${value}°C`;
}
const Statue = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {
    state: { statue },
    dispatch,
  } = useContext(stateContext);
  const navigate = useNavigate();

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  const details = (value) => {
    navigate("/details");
    dispatch({ type: "DETAILS", payload: value });
  };
  console.log(details);
  const favorite = (value) => {
    dispatch({ type: "statueFav", payload: value });
  };

  return (
    <>
      <div className="slide-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 mcol">
              <div className="product-range">
                <div className="product-fil">
                  <h3>Fliter</h3>
                </div>
                {/* <div className='akg'>
                 <button><Icon className='akg-icon' icon="uim:multiply" />AKG</button>
             </div> */}
                <div className="product-bot"></div>
                <div className="cate">
                  <h3>CATEGORIES</h3>
                  <h4>Audio & Video</h4>
                  <p>Headset</p>
                </div>
                <div className="product-bot"></div>
                <Box sx={{ width: 180 }}>
                  {/* <Slider
        getAriaLabel={() => 'Temperature range'}
        // value={value}
        // onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      /> */}
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
                <div className="select">
                  <div>
                    <select onChange={onOptionChangeHandler}>
                      <option>Min</option>
                      {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                  <div className="to">
                    <p>to</p>
                  </div>

                  <div>
                    <select name="cars" id="cars">
                      <option value="volvo">₹500</option>
                      <option value="saab">₹1000</option>
                      <option value="opel">₹1500</option>
                      <option value="audi">₹2000</option>
                    </select>
                  </div>
                  <div className="product-bot"></div>
                </div>
                <div className="checked">
                  <h4>BRAND</h4>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1"> AKG</label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1"> boAt</label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1"> Aroma</label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1"> Logitech</label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1"> Mivi</label>
                </div>
                <br></br>
                <hr></hr>

                <div className="checked">
                  <h4>CUSTOMER RATINGS</h4>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1">
                    {" "}
                    4<Icon icon="ic:round-star-rate" /> & above
                  </label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1">
                    {" "}
                    3<Icon icon="ic:round-star-rate" /> & above
                  </label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1">
                    {" "}
                    2<Icon icon="ic:round-star-rate" /> & above
                  </label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  ></input>
                  <label for="vehicle1">
                    {" "}
                    1<Icon icon="ic:round-star-rate" /> & above
                  </label>
                  <br></br>
                </div>
                <br></br>
                <hr></hr>
              </div>
            </div>

            <div className="col-lg-10 mcol1">
              <div className="product">
                {/* <h3><span>Home <Icon icon="material-symbols:arrow-forward-ios-rounded" width="15" height="16" /></span>Audio & video</h3> */}
                {/* <p className='para'>DIZO Audio & Video ,Samsung Audio & Video ,FD1 Audio & Video ,Bose Audio & Video ,Infinity Audio & Video ,HOPPUP Audio & Video ,Sennheiser Audio & Video ,Mi Audio & Video ,Syska Audio & Video ,Marshall Audio & Video</p> */}

                <h2 className="product-head">
                  Monitor Headphones
                  <span>(Showing 1 - 19 products of 19 products)</span>
                </h2>
                <div className="list">
                  <ul className="sort">
                    <li>
                      <a href="#" className="bold">
                        Sort By
                      </a>
                    </li>
                    <li>
                      <a href="#" className="line">
                        Popularity
                      </a>
                    </li>
                    <li>
                      <a href="#" className="line">
                        Price - Low to High
                      </a>
                    </li>
                    <li>
                      <a href="#" className="line">
                        Price - High to Low
                      </a>
                    </li>
                    <li>
                      <a href="#" className="line">
                        Newest First
                      </a>
                    </li>
                  </ul>
                  <div className="product-bott"></div>
                </div>

                <div className="row1">
                  {statue.map((value, index) => {
                    return (
                      <div className="col-lg-3 rcard" key={index}>
                        <Card sx={{ maxWidth: 360 }}>
                          <CardActionArea>
                            <div className="card-add">
                              <button className="ad">AD</button>
                              <button className="heart">
                                {" "}
                                <Checkbox
                                  {...label}
                                  icon={<FavoriteBorder />}
                                  checkedIcon={<Favorite color="error" />}
                                  checked={value.isFav}
                                  onChange={() => favorite(value)}
                                />
                              </button>
                            </div>
                            <div onClick={() => details(value)}>
                              <div className="card-img">
                                <img src={value.image} />
                              </div>
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                  className="title"
                                >
                                  <h5>{value.head}</h5>
                                  <p>{value.sub}</p>
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  className="star"
                                >
                                  <p className="rate">
                                    {value.rating}
                                    <Icon
                                      className="rate-icon"
                                      icon="material-symbols:star-rounded"
                                      width="20"
                                      height="15"
                                    />
                                  </p>
                                  <p>{value.rate}</p>
                                  <img
                                    src={img}
                                    width="80px"
                                    height="auto"
                                    alt=""
                                  />
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  className="amount"
                                >
                                  <h3>{value.price}</h3>
                                  <p className="amount1">
                                    <del>{value.offer}</del>
                                  </p>
                                  <h4>59% off</h4>
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  className="free"
                                >
                                  <h3>Free Delivery</h3>
                                </Typography>
                              </CardContent>
                            </div>
                          </CardActionArea>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statue;
