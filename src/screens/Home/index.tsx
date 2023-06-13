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
  Separator40,
} from "./styles";
import WalletIcon from "../../assets/Wallet";
import Transfer from "../../assets/Transfer";
import Bills from "../../assets/Bills";
import Withdraw from "../../assets/Withdraw";
import Reward from "../../assets/Reward";
import Nearby from "../../assets/Nearby";
import Notification from "../../assets/Notification";

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
      </View>
    </Container>
  );
}
