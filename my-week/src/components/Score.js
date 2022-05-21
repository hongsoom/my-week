import React from "react";
import styled from "styled-components";

const Score = (props) => {
    return (
        <div>
            <InputWrap>
                <h1>평균페이지</h1>
            </InputWrap>
        </div>    
    )
}
const InputWrap = styled.div`
  background-color: #fff;
  width: 30vw;
  max-width: 350px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export default Score;