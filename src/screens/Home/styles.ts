import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const {width} = Dimensions.get('window');

const CardColors = (item: any) => {
  switch(item){
    case 'green': {
      return '#1ba37a'
    }
    case 'purple': {
      return '#5F59E1'
    }
  }
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #E5E5E5;
`;

export const Separator5 = styled.View`
  height: 5px;
`;

export const Separator20 = styled.View`
  height: 20px;
`;

export const Separator40 = styled.View`
  height: 40px;
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

export const CardContainer = styled.View`
  width: 290px;
  border-radius: 30px;
  background-color: ${(props: any) => CardColors(props.ColorCard)};
  padding: 20px;
`;

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
`;