// Write your Character component here
import React from "react";
import styled from "styled-component";

const CharacterCreator = (props) => {
    return(
        <div key={props.id}>
            <h1>{props.name}</h1>
            <h4>{props.status}</h4>
            <h4>{props.species}</h4>
            <h4>{props.type}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.location}</h4>
        </div>
    )
}

export default CharacterCreator;