import React from "react"
import './Rick.css';

export default function CharacterRick( {list} ) {
    return (
        <div className="char">
            <div className="card text-white bg-secondary mb-3">
                <img src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' className="rounded" alt="Rick"/>
                <div className="card-body">
                    <p className="card-text">{list[0].name}</p>
                    <p className="card-text">{list[0].location.name}</p>
                    <p className="card-text">{list[0].status}</p>
                </div>
            </div>
        </div>
      );
    }
