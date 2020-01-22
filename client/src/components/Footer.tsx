import styled from "@emotion/styled";
import * as React from "react";

const Footer: React.FC = () => {
  return (
    <Root>
      <FooterLinks></FooterLinks>
      <CopyRight>Copyright 2020 rechtburg All rights reserved.</CopyRight>
    </Root>
  )
};

const Root = styled.footer``;

const FooterLinks = styled.div``;

const CopyRight = styled.div``;

export default Footer;
