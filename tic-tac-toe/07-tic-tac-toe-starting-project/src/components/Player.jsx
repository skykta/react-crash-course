import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing)
        // setIsEditing(isEditing ? true : false)
        // setIsEditing(!isEditing)
    }

    let playerName = <span className="player-name">{name}</span>
    // let btnCaption = 'Edit'

    if (isEditing) {
        playerName = <input type="text" required value={name} />
        // btnCaption = 'Save'
    }

    return (
        <li>
            <span>
                <span className="player">{playerName}</span>
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>

    )
}