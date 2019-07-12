import React, {useState} from 'react'
import Character from './Character';

const CharacterList = props => {
    const [characterList, setChar] = useState(props.setStarwarsCharacter)
    return (
        <div className='characterList'>
            {characterList.map(character => (
                <Character character={character} addCharacter={props.addCharacter} />
            ))}
        </div>
    )
}


export default CharacterList