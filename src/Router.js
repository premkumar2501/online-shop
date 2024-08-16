import React, { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { initialState, stateReducer } from './Reducer'
import { stateContext } from './stateContext'
import Component from './Component/Component'
import Card from './AddCard/Card'
import CardDetails from './CardDetails/CardDetails'
import Slide2 from './Slide2/Slide2'
import Print from './Slide2/Printer/Print'
import Addcart from './Slide5/Addcart'
import Buypage from './Buypage/Buypage'
import Shave from './Slide2/Shaver/Shave'
import PowerBank from './Slide2/Power/PowerBank'
import StationayItem from './Slide2/Stationary/StationayItem'
import Cycles from './Slide2/Cycle/Cycles'
import Make from './Slide2/Makeup/Make'
import Toies from './Slide2/Toies/Toies'
import Statues from './Slide2/Statue/Statues'
import Wallpapers from './Slide2/Wallpaper/Wallpapers'
import Candles from './Slide2/Candle/Candles'
import Covers from './Slide2/Cover/Covers'
import Favpage from './Favpage/Favpage'
import Nav from './Nav/Nav'

const Router = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  console.log(state);
  return (
    <stateContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Component />}></Route>
          <Route path='/headphone' element={<Slide2 />}></Route>
          <Route path='/details' element={<CardDetails />}></Route>
          <Route path='/card' element={<Card />}></Route>
          <Route path='/printer' element={<Print />}></Route>
          <Route path='/addcart' element={<Addcart />}></Route>
          <Route path='/buy' element={<Buypage />}></Route>
          <Route path='/shaver' element={<Shave />}></Route>
          <Route path='/powerbank' element={<PowerBank />}></Route>
          <Route path='/stationary' element={<StationayItem />}></Route>
          <Route path='/cycle' element={<Cycles />}></Route>
          <Route path='/makeup' element={<Make />}></Route>
          <Route path='/toy' element={<Toies />}></Route>
          <Route path='/statue' element={<Statues />}></Route>
          <Route path='/wallpaper' element={<Wallpapers />}></Route>
          <Route path='/candle' element={<Candles />}></Route>
          <Route path='/cover' element={<Covers />}></Route>
          <Route path='/favpage' element={<Favpage />}></Route>
          <Route path='/navbar' element={<Nav />}></Route>
        </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  )
}

export default Router
