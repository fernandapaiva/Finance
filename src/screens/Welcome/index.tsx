import React from 'react';
import {Container, TitleInitial, Separator20, AlingImage, BackgroundGrey, Buttons, TextButton, TextPurple, BackgroundPurple} from './styles';
import WelcomeIcon from '../../assets/Welcome';

// import { Container } from './styles';

const Welcome = () => {
  return (
    <Container>
      <Separator20 />
      <Separator20 /> 
      <AlingImage>
      <WelcomeIcon />
      </AlingImage>
      <Separator20 />
      <TitleInitial>{'Effortless. \nIntegrated app'} </TitleInitial>
      <Separator20 />
      <Buttons>
        <BackgroundGrey>
          <TextButton>Sign In</TextButton>
        </BackgroundGrey>
        <BackgroundPurple>
          <TextPurple>Get Started</TextPurple>
        </BackgroundPurple>
      </Buttons>
    </Container>
  )
}

export default Welcome;