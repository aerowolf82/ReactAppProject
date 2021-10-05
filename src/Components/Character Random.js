import React from "react"
//import Random from "./Random.js"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Random.css';

export default function CharacterRandom({charSelectorFunc, selectedChar,list, id}){
``






}





class CharacterRandom extends React.Component{
    constructor(props){
        super();
        this.state = {
            name: '',
            location: '',
            status: '',
            random: 3,
        }
        //this.getRandom = this.getRandom.bind(this);
    }

    // getRandom = (e) => {
    //     const max = 100;
    //     const rand = Math.floor(Math.random() * max);
    //     this.setState({ random: rand }, () => console.log(this.state.random));
    // }
    // handleKeyPress(event) {
    //     // [Enter] should not submit the form when choosing an address.
    //     if (event.random === 3) {
    //       event.preventDefault();
    //     }
    //   }
    //need to pass in an Id to select character 
    componentDidMount(){
            fetch(`https://rickandmortyapi.com/api/character/${this.state.random}`)
            .then(response => response.json())
            .then(data => {
                this.setState({name:data.name})
                this.setState({location:data.location.name})
                this.setState({status:data.status})
            })
        }

        // const url = `https://rickandmortyapi.com/api/character/3`;
        // const response = fetch(url);
        // const data = response.json();  
        // this.setState({name:data.name})
        // this.setState({location:data.location.name})
        // this.setState({status:data.status})

    render(){
        return (
        <div className="card">
            <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" className="card-img-top" alt="Random" />
            <div className="card-body">
                <h5 className="card-title">Are they dead?</h5>
                <div className="card-text">
                    <p>{this.state.name}</p>
                    <p>{this.state.location}</p>
                    <p>{this.state.status}</p>
                </div>
                <button className="btn btn-warning" onClick={() => this.getRandom}>Random Character</button>

            </div>
        </div>
        )
    }
}

export default CharacterRandom;