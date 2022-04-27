import React from "react";
import styled from "styled-components";
import Main from "Pages/Main";

const HeaderContainer = styled.header`
  width: 100vw;
  height: 300px;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
`;

const Header = styled.header`
  width: ${({ theme: { layout } }) => layout.mainWidth};
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <HeaderContainer>
        <Header>네비게이션</Header>
      </HeaderContainer>
      <Main />
      <div className="Modal"></div>
    </>
  );
}

export default App;
