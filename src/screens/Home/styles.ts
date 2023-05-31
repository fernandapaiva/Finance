import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #E5E5E5;
`;

export const Separator5 = styled.View`
  margin-top: 5px;
`;

export const Separator20 = styled.View`
  margin-top: 20px;
`;

export const Separator40 = styled.View`
  margin-top: 40px;
`;

export const FirstRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const TitleBlack = styled.Text`
  font-size: 18px;
  color: #111111;
  font-weight: bold;
`;

export const MainCards = styled.View`
  flex-direction: row;
`;

export const CardGreen = styled.View`
  width: 320px;
  height: 210px;
  border-radius: 30px;
  background-color: #1ba37a;
  padding: 20px;
  margin-left: 20px;
`;

export const CardPurple = styled.View`
  width: 320px;
  height: 210px;
  border-radius: 30px;
  background-color: #5F59E1;
  padding: 20px;
  margin-left: 20px;
`;

export const Encapsulate = styled.View``;

export const TitleCard = styled.Text`
  font-size: 13px;
  color: #ffffff;
`;

export const NumberCard = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const ValueCard = styled.Text`
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
`;

export const RowView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  padding: 20px;
`;