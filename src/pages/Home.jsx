import React from 'react'
import NavBar from '../components/NavBar'
import DesignBox from '../components/DesignBox'
import Logo from '../components/Logo'
import FeaturesGrid from '../components/FeaturesGrid'
import Grid from '../components/Grid'
import TransGrid from '../components/TransGrid'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <NavBar/>
      <main>
        <DesignBox/>
        <Logo/>
        <FeaturesGrid/>
        <Grid/>
      </main>
      
        <TransGrid/>
      
    </div>
  )
}

export default Home
