import React, {useState} from 'react'
import Character from './Character';

const CharacterList = props => {
    // const [characterList, setChar] = useState(props.starwarsChar)
    return (
        <div className='characterList'>
            {props.starwarsChar.map(character => (
                <Character character={character} addCharacter={props.addCharacter} />
            ))}
        </div>
    )
}


export default CharacterList