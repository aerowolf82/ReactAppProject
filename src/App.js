import React from "react"
import CharacterRick from './Components/Character Rick.js'
import CharacterMorty from './Components/Character Morty.js'
import CharacterRandom from './Components/Character Random.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import background from "./background.jpg";

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
      <div>
      <div className ="background" style={{backgroundImage: `url(${background})`, width: '100%'}} >
        <div className="App">
          <header className="App-header">
            <nav className="navbar navbar-dark bg-dark">
              <div className="container-fluid">
                <div className="navbar-brand">Rick and Morty "Dead or Alive" App</div>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Work in Progress" aria-label="Search" />
                    <button type="button" className="btn btn-warning ms-2">Search</button>
                  </form>
              </div>
            </nav>
          </header>
          <div className="container .px-4">
            <div className="row gx-5">
              <div className="col-4">
                <div className="p-3 border bg-dark">
                  <CharacterRick list={characterData} />
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 border bg-dark">
                  <CharacterRandom selectedChar={selectedCharacter} charSelectorFunc={selectCharacter} list={characterData}/>
                </div>
              </div>
              <div className="col-4">
                <div className="p-3 border bg-dark">
                  <CharacterMorty list={characterData}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer>Created by: Brian, Andrew, and John</footer>
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