import React from "react"
import CharacterRick from './Components/Character Rick.js'
import CharacterMorty from './Components/Character Morty.js'
import CharacterRandom from './Components/Character Random.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characterData: [],
      fullData: [],
      selectedCharacter:0,
      gotData: false,
    };
    //this.selectJoke = this.selectJoke.bind(this) // Why is this important?  What is your alternative?
    this.selectCharacter = this.selectCharacter.bind(this)
  }

   selectCharacter(charId){
     this.setState({selectedCharacter:charId}) // Remember, it's important what 'this' is...
   }

 async componentDidMount() {
    const url = `https://rickandmortyapi.com/api/character`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ fullData: data });
    this.setState({ characterData: data.results });
    this.setState({ gotData: true });
  }

  content() {
    const {selectCharacter} = this;
    const { characterData, selectedCharacter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <div className="navbar-brand">Rick and Morty "Dead or Alive" App</div>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button type="button" className="btn btn-warning ms-2" type="submit">Search</button>
                </form>
            </div>
          </nav>
        </header>
        <div className="container .px-4">
          <div className="row gx-5">
            <div className="col-4">
              <div className="p-3 border bg-light">
                <CharacterRick selectedChar={selectedCharacter} charSelectorFunc={selectCharacter} list={characterData} />
              </div>
            </div>
            <div className="col-4">
              <div className="p-3 border bg-light">
                <CharacterRandom selectedChar={selectedCharacter} charSelectorFunc={selectCharacter} list={characterData}/>
              </div>
            </div>
            <div className="col-4">
              <div className="p-3 border bg-light">
                <CharacterMorty selectedChar={selectedCharacter} charSelectorFunc={selectCharacter} list={characterData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {   
    
    return (
      <div>
        {this.state.gotData ? this.content() : null} 
        {console.log(this.state.fullData)}       
      </div>

    );
  }
}



export default App;


/*
import {useState} from 'react'


search bar implementation within app.js
const [state, setState] = useState({
  result=[]
})
//^^this stores our api within an array for the search bar. May need to move the api call 
//to a seperate tab and call it the API file. might make it easier to make our calls in other components

const onSearch = async (text) => {
  const result = await APISrc.get("/", {
    params: {s: text, i:"put the api bulk here", apiKey:"if we have it"}
  })
  setState(prevState => {
    return {...revState, result:result }
  })
}


add to the return of app.js
<SearchBar onSearch={onSearch}/>
<CardList results={state.result}/>
*/