import React from 'react'
import KakaSection from '../components/KakaSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'

const Home = () => {
  return (
    <>
      <KakaSection {...homeObjOne} />

      <KakaSection {...homeObjTwo} />

      <KakaSection {...homeObjThree} /> 
      <KakaSection {...homeObjFour} />
    </>
  )
}

export default Home
