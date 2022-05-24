import React from "react";
import styled from "styled-components";

const Score = (props) => {
    const {rateAverage, removeRate} = props;
    return (
        <InputWrap>
            <p>평균 평점</p>
            <p>{rateAverage}</p>
            <button onClick={removeRate}>Reset</button>
        </InputWrap>   
    )
}

const InputWrap = styled.div`
  width: 50vw;
  max-width: 350px;
  text-align: center;
  p {
    color: black;
    font-weight : bold;
    font-size : 20px;
  }
  button {
      
  }
`;

export default Score;