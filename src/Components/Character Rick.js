import React from "react"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Rick.css';
//<CharacterRick selectedChar={selectedCharacter} charSelectorFunc={selectCharacter} list={characterData} />
//export default function Joke({ jokeSelectorFunc, isSelected, joke, id }) {

export default function CharacterRick( {charSelectorFunc, selectedChar,list, id} ) {
    const url = `https://rickandmortyapi.com/api/character/1`;
    let response = fetch(url);
    return (
        <div className="char">
            <div className="card">
                <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt="Rick"/>
                <div className="card-body">
                {console.log(list[0].location.name)}
                    <p className="card-text">{list[0].name}</p>
                    <p className="card-text">{list[0].location.name}</p>
                    <p className="card-text">{list[0].status}</p>
                </div>
            </div>
        </div>
      );
    }
