import styled from "@emotion/styled";
import * as React from "react";

const Header: React.FC = () => {
  return (
    <Root>
      <h1>R&R Boiler</h1>
      <SearchBox>
        <Input />
      </SearchBox>
    </Root>
  )
};

const Root = styled.header``;

const SearchBox = styled.div``;

const Input = styled.input``;

export default Header;
