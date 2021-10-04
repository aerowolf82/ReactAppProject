import logo from './logo.svg';
import Name from './Components/charName.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick And Morty</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Name />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <JokeList selectedJoke={selectedJoke} jokeSelectorFunc={selectJoke} list={jokeList} /> */}
 
    </div>
  );
}

export default App;
