import React from "react";
import styled from "styled-components";

const Score = (props) => {
    const {rateAverage, removeRate} = props;
    return (
        <div>
            <h3>평균 평점</h3>
            <p>{rateAverage}</p>
            <button onClick={removeRate}>Reset</button>
        </div>    
    )
}

export default Score;