import React from 'react';
import {Modal} from 'react-native';
import {
  Container,
  ContainerInside,
  Information,
  TextInformation,
  ValueInformation,
  ContainerInformation,
  ColumText,
  ColumValue,
  Separator10,
  Separator20,
  Separator30,
  SubContainer,
  RowView,
  Button,
  TextButton,
  TitleTime,
  NumberText,
} from './styles';
import Google from '../../assets/Google';
import Checked from '../../assets/Checked';

export default function AlertCustom() {
  return (
    <Modal
      animationType="fade"
      transparent>
      <Container>
        <ContainerInside>
          <Separator30 />
          <SubContainer>
          <Google />
          <Separator20 />
          <RowView>       
            <Information>Google Drive</Information>   
            <Checked />
          </RowView> 
          <TitleTime>12:30</TitleTime>
          <Separator30 />
          <>
          <NumberText>-$20,500</NumberText>
          </>
          </SubContainer>
          <Separator20 />
          <ContainerInformation>
            <ColumText>
            <TextInformation>CloudOne 10GB</TextInformation>
            <Separator10 />
            <TextInformation>Workspace</TextInformation>
            <Separator10 />
            <TextInformation>Stream Maxx</TextInformation>
            </ColumText>
            <ColumValue>
            <ValueInformation>$15,000</ValueInformation>
            <Separator10 />
            <ValueInformation>$500</ValueInformation>
            <Separator10 />
            <ValueInformation>$5,000</ValueInformation>
            </ColumValue>
            </ContainerInformation>
            <Separator20 />
            <Button>
              <TextButton>Ok, Close</TextButton>
            </Button>
        </ContainerInside>
      </Container>
    </Modal>
  );
}
