import Joke from "./Joke";

export default function JokeList({ list, jokeSelectorFunc, selectedJoke}) {

  return (
    <div className="joke-list">
      {list.map((jokeObj, index) => (
        <Joke jokeSelectorFunc={jokeSelectorFunc} isSelected={selectedJoke===jokeObj.id} joke={jokeObj.joke} id={jokeObj.id} key={index} /> // What would happen if we didn't pass down the jokeSelectorFunc?
      ))}
    </div>
  );
}




export default function Joke({ jokeSelectorFunc, isSelected, joke, id }) {
  
    return (
      <div className="joke" onClick={() => jokeSelectorFunc(id)}>
        {/* The jokeSelectorFunc is being called with a props value as an argument - cool!  It's also wrapped in an arrow func... why?  Hint, in this situation, it's not because of 'this' */}
        {isSelected?(<p><h1>{joke}</h1></p>):(<p>{joke}</p>)}
      </div>
    );
  }

  class Residential extends Building {
    constructor(numberOfFloors, yearLastInspected, numberOfFamilies) {
      super(numberOfFloors, yearLastInspected);
      this.numberOfFamilies = numberOfFamilies;
    }
  
    familiesPerFloor() {
      return this.numberOfFamilies / this.numberOfFloors;
    }
  }

//------------random meme generator on click ----------------------------------------------
  export class MemeGenerator extends React.Component {
    constructor (props) {
    super(props)
    this.state = {
      apiData: []
    }
    this.submitChange = this.submitChange.bind(this)
    }
    componentDidMount () { /* fetch something as default here to show user or nothing till user pushes Gen button*/}
    
        submitChange (name) {
        fetch(`https://api.imgflip.com/${name}`)
        .then(response => response.json())
        .then(data => {
           this.setState({
           apiData: data
           })
        console.log(this.state.apiData)
        })
        }
    
    render () {
    return (
      <div>
        <form onSubmit={this.submitChange}>
          /* you should decide whre to get this name from an array of names from state? hardcode enum ...*/
          <button onClick={this.submitChange({name})} value='Submit'>Gen</button>
       <div>
           <img src='http://i.imgflip.com/1bij.jpg' onLoad={this.loadImg} />
       </div>
        </form>
      </div>
    )}}



//------------------Random number function----------
import React from 'react';
import { render } from 'react-dom';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }

  handleClick() {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    this.setState({ random: this.state.random + rand });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <div>The number is: {this.state.random}</div>
      </div>
    );
  }
}

render(<Button />, document.getElementById('container'));


/*************************************************************** */
class App extends Component {
    constructor() {
      super();
      this.state = {
        jokeList: [],
        selectedJoke:0,
      };
      this.selectJoke = this.selectJoke.bind(this) // Why is this important?  What is your alternative?
    }
  
    selectJoke(jokeId){
      this.setState({selectedJoke:jokeId}) // Remember, it's important what 'this' is...
    }
  
    async componentDidMount() { // This can also be done with promises!
      let res = await fetch(url);
      let json = await res.json();
      let value = json.value;
      this.setState({ jokeList: value });
    }
  
    render() {
      const {selectJoke} = this;
      const { jokeList, selectedJoke } = this.state;
  
      return (
        <div className="App">
          <JokeList selectedJoke={selectedJoke} jokeSelectorFunc={selectJoke} list={jokeList} />
          {/* <button onClick={()=>{this.selectJoke(`THIS WORKS - WHY?`)}}>CLICK ME</button> */}
          {/* Comment in the button above if you want - line 14 fixes the problem it makes apparent, though - 'this' is correctly bound in the App.js file, but not in others, unless the function is bound on line 14 or surrounded with an arrow func on line 32*/}
        </div>
      );
    }
  }




  import React from 'react'

export default class Counter extends React.Component {
    state = {
        //INITIALIZE STATE HERE...
     count: 0
    }

    incrementCounter = () => {
        //UPDATE STATE HERE...
        const thisCount = this.state.count + 1
        this.setState({count: thisCount})
        
    }

    render(){
        //ADD EVENT HANDLER WHERE IT SHOULD GO BELOW...
        return (
            <div>
                <p>You've clicked the button <span>{this.state.count}</span> times!</p>
                    
                <button id="button" onClick={() => this.incrementCounter()}>Click me!</button>
            </div>
        )
    }
 }




//*************************************************************** */

class TestSubmitComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    formSubmitHandler = (e) => {
        e.preventDefault(); //should prevent submit, and continue below?
        console.log(e);
        console.log('hello world ! why this does NOT show in console?!')
        return false;
    }


    render() {
        return(
            <form onSubmit={this.formSubmitHandler}>
                <div>
                    <h1>Select a file to upload</h1>

                    <input type="file" accept=".txt" name="ctlFileInput"></input>

                    <p/>
                    <input type="submit" value="Click to submit" />
                </div>
            </form>
        )
    }
}

export default TestSubmitComponent;


