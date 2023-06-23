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
  SubContainer,
  RowView,
  Button,
  TextButton,
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
          <SubContainer>
          <Google />
          <RowView>       
            <Information>Google Drive</Information>   
            <Checked />
          </RowView>
          </SubContainer>
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
            <Button>
              <TextButton>Ok, Close</TextButton>
            </Button>
        </ContainerInside>
      </Container>
    </Modal>
  );
}
