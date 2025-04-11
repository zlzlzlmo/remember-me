import React from "react";
import styled from "styled-components/native";
import colors from "../../constant/colors";

interface Props {
  onPress: () => void;
  children: React.ReactNode;
  fixedWidth?: number;
}

export default function PrimaryButton({
  onPress,
  children,
  fixedWidth,
}: Props) {
  return (
    <Container onPress={onPress} fixedWidth={fixedWidth}>
      <Label>{children}</Label>
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ fixedWidth?: number }>`
  background-color: ${colors.primary};
  width: ${({ fixedWidth }) => (fixedWidth ? `${fixedWidth}px` : "auto")};
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
`;

const Label = styled.Text`
  color: ${colors.secondary};
  font-size: 16px;
  text-align: center;
  font-weight: 600;
`;
