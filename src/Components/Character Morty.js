import React from "react"
import './Morty.css';

export default function CharacterMorty( {list} ) {
    return (
        <div className="char">
            <div className="card text-white bg-secondary mb-3">
                <img src='https://rickandmortyapi.com/api/character/avatar/2.jpeg' className="rounded" alt="Morty"/>
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