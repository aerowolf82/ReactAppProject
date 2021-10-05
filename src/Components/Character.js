import React from "react"

class Character extends React.Component{
    constructor(props){
        super();
        this.state = {
            name: '',
            location: '',
            status: '',
        }
    }
    //need to pass in an Id to select character 
    async componentDidMount(){
        const url = `https://rickandmortyapi.com/api/character/1`;
        {/*${props.searchName}*/}
        const response = await fetch(url);
        const data = await response.json();
        this.setState({name:data.name, location:data.location, status:data.status })
    }

    render(){
        return (
        <div>
            <div>{this.state.name}</div>
            <div>{this.state.location}</div>
            <div>{this.state.status}</div>
        </div>
        )
    }
}

export default Character;