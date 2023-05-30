import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Container, TitleInitial, BackgroundGrey, Buttons, TextButton, TextPurple, BackgroundPurple, Separator20} from './styles';
import WelcomeIcon from '../../assets/Welcome';

export default function Welcome () {

  const navigation = useNavigation();

  return (
    <Container>
      <WelcomeIcon />
      <Separator20 />
      <TitleInitial>{'Effortless. \nIntegrated app'} </TitleInitial>
      <Separator20 />
      <Separator20 />
      <Buttons>
        <BackgroundGrey>
          <TextButton>Sign In</TextButton>
        </BackgroundGrey>
        <BackgroundPurple onPress={() => navigation.navigate('Home')}>
          <TextPurple>Get Started</TextPurple>
        </BackgroundPurple>
      </Buttons>
    </Container>
  )
}