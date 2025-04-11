import React from "react";
import styled from "styled-components/native";
import colors from "../../constant/colors";

interface Props {
  onPress: () => void;
  children: React.ReactNode;
  fixedWidth?: number;
}

export default function SecondaryButton({
  onPress,
  children,
  fixedWidth,
}: Props) {
  return (
    <Container onPress={onPress} style={{ width: fixedWidth }}>
      <Label>{children}</Label>
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ fixedWidth?: number }>`
  background-color: ${colors.secondary};
  width: ${({ fixedWidth }) => (fixedWidth ? `${fixedWidth}px` : "auto")};
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  border: 2px solid ${colors.primary};
`;

const Label = styled.Text`
  color: ${colors.primary};
  font-size: 16px;
  text-align: center;
  font-weight: 600;
`;
