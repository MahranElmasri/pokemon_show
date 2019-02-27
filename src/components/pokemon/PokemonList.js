import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import axios from "axios";
import loader from "../../../src/loader.gif";
export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=32",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                url={pokemon.url}
                name={pokemon.name}
              />
            ))}
          </div>
        ) : (
          <img className="loader" alt="loading" src={loader} />
        )}
      </React.Fragment>
    );
  }
}
