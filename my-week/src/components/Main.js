import React, { useState } from "react";
import Score from "./Score";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory();

    const week = props.week; 
       
    const [rate, setRate] = useState(Array.from({length : 7}, (value) => value = Math.floor(Math.random() * 5) + 1));
    const [circle, setCircle] = useState([1, 2, 3, 4, 5]);

    const rateAverage = rate => {
      if(rate.length === 0) return 0;
      const sum = rate.reduce((a,b) => a+b) / rate.length;
      return sum.toFixed(1);
    }

    const removeRate = () => {
      setRate(rate.filter((x) => x === 0));
    }
    
    console.log(rate)

    return (
        <Container>
            <Title >내 일주일은?</Title>
   
            {week.map((week, index) => {
        return ( 
            <Date key={index}> {week} 
          {circle.map((num,i) =>
                <Circle key={i} style={{backgroundColor : rate[index] > i ?  'yellow' : ('#D3D3D3')}}></Circle>
              )}
              <Button onClick={ () => {
               history.push("/detail/" + index);
            }}>
              </Button>
            </Date>
            )})}
  
        <Score rateAverage={rateAverage(rate)} removeRate={removeRate}  />
    </Container>
    );
};


const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Title = styled.div`
  color: black;
  font-size : 25px;
  margin-top : 60px;
  margin-bottom : 25px;
  font-weight : bold;
`;

const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight : bold;
  font-size : 18px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 20px 10px;
`;

const Button = styled.div`
  width: 0px;
  height: 0px;
  border-left: 25px solid #666666;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  cursor : pointer;
  margin-left : 20px;
`;

export default Main;