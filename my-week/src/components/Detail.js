import React, {useState} from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";


const Detail = (props) => {
    const week = props.week
    
    const { id } = useParams();
    const history = useHistory();

    const [circle, setCircle] = useState([0, 0, 0, 0, 0])
    
    const onClick = () => {
        history.push('/')
    } 

    return (
        <div>
            <h3>{week[id]}요일 평점 남기기</h3>
            {circle.map((num, index) => {
                return (
                    <Circle key={index} style={{backgroundColor : index ?  'green' : 'yellow'}}></Circle>
                )
            })
            }
            <button onClick={onClick}>평점 남기기</button>
        </div>
    )
}

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 20px 10px;
  border: 1px solid black;
`;

export default Detail;