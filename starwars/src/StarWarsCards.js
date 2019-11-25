import React from "react";
import styled from "styled-components";

const Card_section = styled.section`
    disply: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 2%;
`
const Card_div = styled.div`
    border: 1px solid blue;
    width: 40%;
    height: 70%;
`;

const Card_name = styled.h1`
    background-color: turquoise;
`

const StarWarsCard = props => {
    return (
        <Card_section>
            <Card_div>
                <Card_name>{props.name}</Card_name>
                <h2>Gender: {props.gender}</h2>
                <h2>Height: {props.height}</h2>
                <h2>Mass: {props.mass}</h2>
                <h2>Eye Color: {props.eye_color}</h2>
                <h2>Hair Color: {props.hair_color}</h2>
            </Card_div>
        </Card_section>
    );
};

export default StarWarsCard;