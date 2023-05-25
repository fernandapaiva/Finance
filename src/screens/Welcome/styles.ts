import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #E5E5E5;
`;

export const TitleInitial = styled.Text`
  color: #111111;
  font-size: 28px;
  font-weight: bold;
  margin-left: 10px;
`;

export const Separator15 = styled.View`
  margin-top: 15px;
`;

export const Separator20 = styled.View`
  margin-top: 20px;
`;

export const AlingImage = styled.View`
  align-items: center;
`;

export const Buttons = styled.View`
  width: ${width - 20}px;
  flex-direction: row;
`;

export const BackgroundGrey = styled.TouchableOpacity`
  width: 150px;
  height: 45px;
  background-color: #ededf3;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #6f6f94;
`;

export const BackgroundPurple = styled.TouchableOpacity`
  width: 150px;
  height: 45px;
  background-color: #5F59E1;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

export const TextPurple = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;

