import React from 'react';
import './StarWars.css';
import {Segment} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"

const Character = props => {
    return (
        <div className='character'>
            <Segment>
            <p>
                {props.character.name}
            </p>
            <p>
                Birth Year: {props.character.birth_year}
            </p>
            <p>
                Eye Color: {props.character.eye_color}
            </p>
            </Segment>
        </div>
    )
}

export default Character;