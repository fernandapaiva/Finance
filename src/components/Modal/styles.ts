import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: flex-end;
  opacity: 0.68;
`;

export const ContainerInside = styled.View`
  background-color: #ffffff;
  width: 100%;
  min-height: 470px;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
`;

export const SubContainer = styled.View`
  align-items: center;
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SeparatorItems = styled.View`
  height: 35px;
`;

export const Separator10 = styled.View`
  height: 10px;
`;

export const Information = styled.Text`
  font-size: 16px;
  color: #111111;
  font-weight: bold;
`;

export const TextInformation = styled.Text`
  font-size: 16px;
  color: #111111;
`;

export const ValueInformation = styled.Text`
  font-size: 16px;
  color: #111111;
`;

export const ContainerInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const ColumText= styled.View``;

export const ColumValue= styled.View`
  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity `
  width: ${width - 50}px;
  height: 46px;
  background-color: #5f59e1;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;