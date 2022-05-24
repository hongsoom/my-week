import React, {useState} from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";


const Detail = (props) => {
    const week = props.week
    
    const { id } = useParams();
    const history = useHistory();

    const [circle, setCircle] = useState([1, 2, 3, 4, 5]);
    const [click, setClick] = useState();

    console.log(click)
    
    const onClick = () => {
        history.push('/')
    } 

    return (
        <Container>
            <Title>{week[id]}요일 평점 남기기</Title>
            <CircleWarp>
            {circle.map((circle, i) => {
                return (
                    <Circle key={i} onClick={ () => setClick(i)} 
                    style={{backgroundColor : click >= i ?  ('#FFB6C1') : ('#FFF0F5')}}>
                    </Circle>
                )
            })}
            </CircleWarp>
            <Button onClick={onClick}>평점 남기기</Button>
        </Container>
    )
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  padding: 50px;
  margin: 50px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
`;

const Title = styled.div`
    margin-top: 20px;
    font-weight: 900;
    font-size : 20px;
    padding: 0.2rem;
    border-radius: 5px;
`;

const CircleWarp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const Circle = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 30px;
    margin: 10px 5px;
    cursor : pointer;
`;

const Button = styled.div`
    border-radius: 5px;    
    border : 1px solid black;
    cursor : pointer;
    padding : 15px;
    margin : 0 30px;
`;

export default Detail;