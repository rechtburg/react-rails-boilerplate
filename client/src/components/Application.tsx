import styled from "@emotion/styled";
import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Top from "./Top";

const Application: React.FC = () => (
  <Root>
    <Header />
    <Top />
    <Footer />
  </Root>
)

const Root = styled.div``;

export default Application;
