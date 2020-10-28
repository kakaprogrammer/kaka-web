import React from 'react'
import KButton, { ButtonColor, ButtonSize, ButtonStyle } from '../components/KButton'

const Home = () => {
  return (
    <div className="home">
      <h1>Trang chủ</h1>
      
      <KButton>EEEEEEE</KButton>
      <KButton
        buttonSize={ButtonSize.Large}
        buttonColor={ButtonColor.Green}
       >
        Cai quan 1
      </KButton>
      <KButton 
        buttonStyle={ButtonStyle.Outline}
        buttonSize={ButtonSize.Large}
        buttonColor={ButtonColor.Red}
      >
        Cai quan
      </KButton>
    </div>
  )
}

export default Home
