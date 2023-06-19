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
  background-color: #fafafa;
`;

export const Separator5 = styled.View`
  height: 5px;
`;

export const Separator10 = styled.View`
  height: 10px;
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

export const TitleMenu = styled.Text`
  font-size: 18px;
  color: #111111;
  font-weight: bold;
  margin-left: 20px;
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

export const Description = styled.View`
  align-items: center;
`;

export const TitleDescription = styled.Text`
  font-size: 14px;
  color: #111111;
`;

export const ContainerWhite = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 24px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const ContainerAbsolute = styled.View`
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: #5F59E1;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  align-self: center;
  bottom: 70px;
`;