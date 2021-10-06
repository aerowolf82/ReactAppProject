import React, { useState, useEffect } from "react"
//import useFetch from "react-fetch-hook";



//import Random from "./Random.js"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Random.css';


const randomId = () =>{
    let max = 20;
    const rand = 1+(Math.floor(Math.random() * max));
    return rand;
}

// const handleClick(){
//     return CharacterRandom(selecte)
// }

//no matter what we killed it lol 
//Yes, yes we did.

export default function CharacterRandom({charSelectorFunc, selectedChar,list, id}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                    <button onClick={()=>randomId()} className="btn btn-warning">Random Character</button>
                    {console.log(selectedChar)}
            </div>
        </div>
    )
}






