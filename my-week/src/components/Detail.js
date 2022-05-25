import React, {useState} from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";


const Detail = (props) => {
    const week = props.week
    
    const { id } = useParams();
    const history = useHistory();

    const [circle, setCircle] = useState([1, 2, 3, 4, 5]);
    const [click, setClick] = useState();

    const onClick = () => {
        history.push('/')
    } 

    return (
        <Container>
            <h3>
                <span>{week[id]}요일</span> 평점 남기기
            </h3>
            <CircleWarp>
            {circle.map((circle, i) => {
                return (
                    <Circle key={i} onClick={ () => setClick(i)} 
                    style={{backgroundColor : click >= i ?  ('#FFD24C') : ('#FFE69A')}}>
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
    width: 80vw;
    height: 90vh;
    margin: 5vh auto;
    padding: 5vh 0px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;

    h3 {
        text-align: center;
    }
    span {
        background : orange;
        color : white;
        border-radius: 5px;
        font-weight: 900;
        padding : 3px;
    }
`;

const CircleWarp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 10px 5px;
    cursor : pointer;
`;

const Button = styled.div`
    color : white;
    font-weight : bold;
    background : #92B4EC;
    border-radius: 5px;    
    border : 1px solid #92B4EC;
    cursor : pointer;
    padding : 13px;
    margin : 10px 60px;
    text-align: center;
`;

export default Detail;