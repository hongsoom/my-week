import React from "react";
import styled from "styled-components";

const Score = (props) => {
    const {rateAverage, removeRate} = props;
    return (
        <InputWrap>
            <p>평균 평점</p>
            <p>{rateAverage}</p>
            <Button onClick={removeRate}>Reset</Button>
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
`;
const Button = styled.div`
    border-radius: 5px;    
    border : 1px solid black;
    cursor : pointer;
    padding : 15px;
    margin : 0 30px;
`;

export default Score;