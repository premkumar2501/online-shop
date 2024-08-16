import React from 'react'
import Banner from './Banner/Banner'
import ChooseCard from './ChooseCard/ChooseCard'
import Home from './Home/Home'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const Component = () => {
  return (
    <div>  
    <Nav/>  
    <ChooseCard/>
    <Banner/>
    <Home/>
    <Footer/> 
    </div>
  )
}

export default Component
