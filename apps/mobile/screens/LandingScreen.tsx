// apps/mobile/screens/LandingScreen.tsx
import React from "react";
import styled from "styled-components/native";
import { PrimaryButton, SecondaryButton } from "../coomponents/Button";

export default function LandingScreen() {
  const handlePrimaryButtonPress = () => {
    console.log("Navigating to Bereaved Screen");
    // navigation.navigate("BereavedScreen"); // Replace with actual screen name
  };

  const handleSecondaryButtonPress = () => {
    console.log("Navigating to FuneralDirector Screen");
    // navigation.navigate("FuneralDirectorScreen"); // Replace with actual screen name
  };

  const handleSignUpLoginPress = () => {
    console.log("Navigating to SignUp/Login Screen");
    // navigation.navigate("SignUpLoginScreen"); // Replace with actual screen name
  };

  return (
    <Container>
      <Logo
        source={require("../assets/images/screens/landing.png")}
        resizeMode="contain"
      />
      <Title>Remember Me</Title>
      <SubTitle>유족이신가요? 지도사이신가요?</SubTitle>
      <PrimaryButton onPress={handlePrimaryButtonPress} fixedWidth={240}>
        유족
      </PrimaryButton>
      <SecondaryButton onPress={handleSecondaryButtonPress} fixedWidth={240}>
        장례지도사
      </SecondaryButton>
      <Footer>
        <FooterText>회원이신가요?</FooterText>
        <FooterLink onPress={handleSignUpLoginPress}>
          회원가입/로그인
        </FooterLink>
      </Footer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 24px;
`;

const Logo = styled.Image`
  width: 240px;
  height: 240px;
  margin-bottom: 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1c1c1e;
  margin-bottom: 8px;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: #555;
  margin-bottom: 32px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 100px;
  flex-direction: row;
  align-items: center;
`;

const FooterText = styled.Text`
  font-size: 14px;
  color: #555;
  margin-right: 4px;
`;

const FooterLink = styled.Text`
  font-size: 14px;
  color: #007aff;
  font-weight: bold;
`;
