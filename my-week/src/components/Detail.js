import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";


const Detail = (props) => {
    const week = props.week
    const { index } = useParams();
    const history = useHistory();
    
    const onClick = () => {
        history.goBack('/')
    } 
    return (
        <div>
            <h3>{week[index]} 평점 남기기</h3>
            <div></div>
            <button onClick={onClick}>평점 남기기</button>
        </div>
    )
}
export default Detail;