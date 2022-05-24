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
            <h3>{week[id]}요일 평점 남기기</h3>
            <CircleWarp>
            {circle.map((circle, i) => {
                return (
                    <Circle key={i} onClick={ () => setClick(i)} 
                    style={{backgroundColor : click >= i ?  'yellow' : ('#D3D3D3')}}>
                    </Circle>
                )
            })}
            </CircleWarp>
            <button onClick={onClick}>평점 남기기</button>
        </Container>
    )
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
`;

const CircleWarp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 20px 10px;
  cursor : pointer;
`;

export default Detail;