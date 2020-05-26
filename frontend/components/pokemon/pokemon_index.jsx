import React from 'react'

export default class PokemonIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = { entities: { pokemon: { 1: {name: "blastoise"}, 2: {name: "charizard"} }} }
    }

    componentDidMount(){
        this.props.requestAllPokemon()
        }
    
    render(){
    var allPokes = <li>there is no truth</li>
        if ( this.state.entities.pokemon){
            allPokes = this.props.selectAllPokemon(this.state).map((poke) => {
                return <li>{poke.name}</li>
            })
        }
        return(
            <ul>
                { allPokes }
            </ul>
        )
    }
}