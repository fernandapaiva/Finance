import React from "react";
import { Modal } from "react-native";
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
  SeparatorItem,
} from "./styles";
import Google from "../../assets/Google";
import Checked from "../../assets/Checked";

interface ModalProps {
  visible: boolean,
  setVisible: (value: boolean) => void,
  onPress: () => void,
}

export default function AlertCustom({visible, setVisible, onPress}: ModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Container>
        <ContainerInside>
          <Separator30 />
          <SubContainer>
            <Google />
            <Separator20 />
            <RowView>
              <Information>Google Drive</Information>
              <SeparatorItem />
              <Checked />
            </RowView>
            <TitleTime>12:30 PM</TitleTime>
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
          <Button onPress={() => onPress()}>
            <TextButton>Ok, Close</TextButton>
          </Button>
        </ContainerInside>
      </Container>
    </Modal>
  );
}
