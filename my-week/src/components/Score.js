import React from "react";
import styled from "styled-components";

const Score = (props) => {
    const {rateAverage, removeRate} = props;
    return (
        <div>
            <InputWrap>
                <h3>평균 평점</h3>
                <p>{rateAverage}</p>
                <button onClick={removeRate}>Reset</button>
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