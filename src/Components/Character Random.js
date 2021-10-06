import React, { useState, useEffect } from "react"

import './Random.css';


const randomId = () =>{
    let max = 20;
    const rand = 1+(Math.floor(Math.random() * max));
    return rand;
}


export default function CharacterRandom({charSelectorFunc, selectedChar,list, refresh}){
    selectedChar = randomId();
    console.log(selectedChar)
        
    return (
        <div className="card">
            <img src={`https://rickandmortyapi.com/api/character/avatar/${selectedChar}.jpeg`} className="card-img-top" alt="Random" />
            <div className="card-body">
                <h5 className="card-title">Are they dead?</h5>
                <div className="card-text">
                    <p>{list[selectedChar-1].name}</p>
                    <p>{list[selectedChar-1].location.name}</p>
                    <p>{list[selectedChar-1].status}</p>
                </div>
                <form action="127.0.0.1:3000" method="GET">
                    <button className="btn btn-warning">Random Character</button>
                </form>  
            </div>
        </div>
    )
}






