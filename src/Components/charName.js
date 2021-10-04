import React from "react"

class Name extends React.Component{
    constructor(searchName){
        super();
        this.state = {
            name: '',
        }
        this.searchName = searchName;
    }
    //need to pass in an Id to select character 
    async componentDidMount(searchName){
        const url = `https://rickandmortyapi.com/api/character/?name=${searchName}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({name:data})
    }

    render(){
        return <div>
            this.state.name
        </div>
    }

}

export default Name;