import React, { useState, useEffect } from "react"
//import useFetch from "react-fetch-hook";



//import Random from "./Random.js"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Random.css';


const randomId = () =>{
    let max = 20;
    const rand = Math.floor(Math.random() * max);
    return rand;
}

//no matter what we killed it lol 
//Yes, yes we did.

export default function CharacterRandom({charSelectorFunc, selectedChar,list, id}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let results = [];
    
// const { isLoading, error, data } = useFetch(`https://rickandmortyapi.com/api/character/${randomId()}`);

//if (isLoading) return "Loading...";
//if (error) return "Error!";


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${randomId()}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            throw response;
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
        }, []);

    if (loading) return "Loading...";
    if (error) return "Error!";
        // this.setState({name:data.name})
        // this.setState({location:data.location.name})
        // this.setState({status:data.status})
        //image state changer

    return (
        
        <div className="card">
            <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" className="card-img-top" alt="Random" />
            <div className="card-body">
                <h5 className="card-title">Are they dead?</h5>
                <div className="card-text">
                <pre>{JSON.stringify(data, null, 0)}</pre>

                    {/* <p>{this.state.name}</p>
                    <p>{this.state.location}</p>
                    <p>{this.state.status}</p> */}
                </div>
                    <button className="btn btn-warning">Random Character</button>

            </div>
        </div>
    )
}






