import React, { useState } from "react";
import Score from "./Score";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory();

    const week = props.week    
    const [rate, setRate] = useState(Array.from({length : 7}, (value) => value = Math.floor(Math.random() * 4) + 1));

    const rateAverage = rate => {
      if(rate.length === 0) return 0;
      const sum = rate.reduce((a,b) => a+b) / rate.length;
      return sum.toFixed(1);
    }

    const removeRate = (rate) => {
      setRate(rate.length === 0)
      return rateAverage(rate)
    }

    console.log(rate)
    console.log(week)
    console.log(rateAverage(rate))
    console.log(removeRate)
    
    return (
        <Container>
            <Title >내 일주일은?</Title>
            {week.map((week, index) => {
        return ( 
            <div>
            <Rate key={index}> {week} </Rate>
              <button onClick={ () => {
               history.push("/detail/" + index);
            }}>  PUSH
              </button>
            </div>
            )})}
        <Score rateAverage={rateAverage(rate)} removeRate={removeRate}  />
    </Container>
    );
};


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
  font-size : 15px;
  margin : 50px;
`;

const Rate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 20px 10px;
  border: 1px solid black;
`;

export default Main;