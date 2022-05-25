import React from "react";
import styled from "styled-components";

const Score = (props) => {
    const {rateAverage, removeRate} = props;
    return (
        <InputWrap>
            <h3>평균 평점</h3>
            <p>{rateAverage}</p>
            <button onClick={removeRate}>Reset</button>
        </InputWrap>   
    )
}

const InputWrap = styled.div`
  width: 50vw;
  max-width: 350px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin-bottom: 5px;
    font-weight : bold;
  }
  p {
    margin: 5px;
    color: black;
    font-weight : bold;
    font-size : 20px;
  }
  button {
    color : white;
    font-size : 15px;
    font-weight : bold;
    background : #92B4EC;
    border-radius: 5px;    
    border : 1px solid #92B4EC;
    cursor : pointer;
    width: 100px;
    height: 50px;
    margin: 5px;
  }
`;

export default Score;