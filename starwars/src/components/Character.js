// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
    border: 1px solid black;
    padding: 2%;
    margin: 1%;
    color: black;
    opacity: 0.70;
`

const CharacterCreator = (props) => {
    const divstyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover'
    }
    return(
        <CharacterDiv key={props.id} style={divstyle}>
            <h1>{props.name}</h1>
            <h4>{props.status}</h4>
            <h4>{props.species}</h4>
            <h4>{props.type}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.location}</h4>
        </CharacterDiv>
    )
}

export default CharacterCreator;