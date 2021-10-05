import React from "react"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Morty.css';
//<CharacterRick selectedChar={selectedCharacter} charSelectorFunc={selectCharacter} list={characterData} />
//export default function Joke({ jokeSelectorFunc, isSelected, joke, id }) {
export default function CharacterMorty( {charSelectorFunc, selectedChar,list, id} ) {
    const url = `https://rickandmortyapi.com/api/character/2`;
    let response = fetch(url);
    return (
        <div className="char">
            <div className="card">
                <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' alt="Morty"/>
                <div className="card-body">
                 {/* {console.log(list)} */}
                    <p className="card-text">{list[1].name}</p>
                    <p className="card-text">{list[1].location.name}</p>
                    <p className="card-text">{list[1].status}</p> 
                </div>
            </div>
        </div>
      );
    }