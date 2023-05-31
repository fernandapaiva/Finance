import React from 'react';
import {Container, RowView, FirstRow, TitleBlack, ValueCard, CardGreen, CardPurple, TitleCard, NumberCard, Encapsulate, MainCards, Separator5, Separator20, Separator40} from './styles';
import WalletIcon from '../../assets/Wallet';
import Transfer from '../../assets/Transfer';
import Bills from '../../assets/Bills';
import Withdraw from '../../assets/Withdraw';
import Reward from '../../assets/Reward';
import Nearby from '../../assets/Nearby';
import Notification from '../../assets/Notification';

export default function Home () {

  return (
    <Container>
      <FirstRow>
        <TitleBlack>Dashboard</TitleBlack>
        <Notification /> 
      </FirstRow>
      <MainCards>
      <CardGreen>
        <Separator5 />
          <>
          <TitleCard>Current Balance</TitleCard>
          <Separator5 />
          <ValueCard>$12,490,209</ValueCard>
          </>
          <Separator40 /> 
          <Separator40 />
          <Encapsulate>          
            <NumberCard> °°°° °°°° °°°° 3901</NumberCard>
          </Encapsulate>
        </CardGreen>
        <CardPurple>
        <Separator5 />
          <>
          <TitleCard>Current Balance</TitleCard>
          <Separator5 />
          <ValueCard>$12,490,209</ValueCard>
          </>
          <Separator40 /> 
          <Separator40 />
          <Encapsulate>          
            <NumberCard> °°°° °°°° °°°° 3901</NumberCard>
          </Encapsulate>
        </CardPurple>
        </MainCards>
      <RowView>
     <WalletIcon />
     <Transfer />
     <Bills />
     </RowView>
     <RowView>
      <Withdraw />
      <Reward />
      <Nearby />
     </RowView>
    </Container>
  );
}