import { useState } from "react";
export default function Players({initialName, symbol, isActive}){
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setisEditing] = useState(false);

    function handleClickEdit() {
        setisEditing((editing) =>!editing);
    }

    function handleChange(event){
      //console.log(event);
      setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
        editablePlayerName = (<input type="text" required  value={playerName} onChange={handleChange} />);
    } 

    return(
        <>
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editablePlayerName}
          </span>
          <span className="player-symbol">{symbol}</span>
        </li>
        <button onClick={handleClickEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </>
    );
}