import React from "react";
import styled from "styled-components";


export const FooterStyle = styled.header`
  grid-column: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh 1vw;
  color: grey;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <small>Developed by Yesica</small>
    </FooterStyle>
  );
};

export default Footer;
