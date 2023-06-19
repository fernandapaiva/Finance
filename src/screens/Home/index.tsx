import React from "react";
import { FlatList, View } from "react-native";
import {
  Container,
  RowView,
  FirstRow,
  TitleBlack,
  ValueCard,
  CardContainer,
  TitleCard,
  NumberCard,
  Separator5,
  Separator10,
  Separator40,
  Separator20,
  ContainerWhite,
  TitleMenu,
  ContainerAbsolute,
  Description,
  TitleDescription,
} from "./styles";
import WalletIcon from "../../assets/Wallet";
import Transfer from "../../assets/Transfer";
import Bills from "../../assets/Bills";
import Withdraw from "../../assets/Withdraw";
import Reward from "../../assets/Reward";
import Nearby from "../../assets/Nearby";
import Notification from "../../assets/Notification";
import Vector from "../../assets/Vector";

export default function Home() {
  const DATA = [
    {
      conta: "Current Balance",
      saldo: "$12,490,209",
      numero: "°°°° °°°° °°°° 3901",
      colorCard: "green",
    },
    {
      conta: "Current Balance",
      saldo: "$12,490,209",
      numero: "°°°° °°°° °°°° 3901",
      colorCard: "purple",
    },
  ];

  return (
    <Container>
      <FirstRow>
        <TitleBlack>Dashboard</TitleBlack>
        <Notification />
      </FirstRow>
      <Separator40 />
      <View style={{minHeight: 210}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={DATA}
          horizontal
          renderItem={({ item }) => (
            <View style={{paddingHorizontal: 15}}>
              <CardContainer ColorCard={item.colorCard}>
                <Separator5 />
                <>
                  <TitleCard>{item.conta}</TitleCard>
                  <Separator5 />
                  <ValueCard>{item.saldo}</ValueCard>
                </>
                <Separator40 />
                <NumberCard>{item.numero}</NumberCard>
              </CardContainer>
            </View>
          )}
        />
        <Separator40 />
      </View>
      <View style={{flex: 1}}>
        <>
        <TitleMenu>Main Menus</TitleMenu>
        </>
        <Separator20 />
        <RowView>
          <Description>
          <ContainerWhite>
          <WalletIcon />
          </ContainerWhite>
          <Separator10 />
          <TitleDescription>Top Up</TitleDescription>
          </Description>
          <Description>
          <ContainerWhite>
          <Transfer />
          </ContainerWhite>
          <Separator10 />
          <TitleDescription>Transfer</TitleDescription>
          </Description>
          <Description>
          <ContainerWhite>
          <Bills />
          </ContainerWhite>
          <Separator10 />
          <TitleDescription>Bills</TitleDescription>
          </Description>
        </RowView>
        <Separator40 />
        <RowView>
          <Description>
          <ContainerWhite>
          <Withdraw />
          </ContainerWhite>
          <Separator10 />
          <TitleDescription>Withdraw</TitleDescription>
          </Description>
          <Description>
          <ContainerWhite>
          <Reward />
          </ContainerWhite>
          <Separator10 />
          <TitleDescription>Reward</TitleDescription>
          </Description>
          <Description>
          <ContainerWhite>
          <Nearby />
          </ContainerWhite>
          <Separator10 />
          <TitleDescription>Nearby</TitleDescription>
          </Description>
        </RowView>
      </View>
      <ContainerAbsolute>
        <Vector />
      </ContainerAbsolute>
    </Container>
  );
}
