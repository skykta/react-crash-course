import { useState } from "react";

export default function Player({ initialName, symbol, isPlaying, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
        // setIsEditing(isEditing ? true : false)
        // setIsEditing(!isEditing)
    }

    function handleChange(event) {
        // console.log(event)
        setPlayerName(event.target.value)
    }

    let editableName = <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit'

    if (isEditing) {
        editableName = <input type="text" required value={playerName} onChange={handleChange} />
        // btnCaption = 'Save'
    }

    return (
        <li className={isPlaying ? 'active' : undefined}>
            <span>
                <span className="player">{editableName}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>

    )
}