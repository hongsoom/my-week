import React from "react";
import Score from "./Score";
import styled from "styled-components";

const Main = (props) => {
    return (
        <AppWrap className="App">
            <Container>
            <Title >내 일주일은?</Title>
            <Score/>
            </Container>
        </AppWrap>
    );
};
const AppWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: black;
  text-align: center;
  font-size : 30px;
`;

export default Main;