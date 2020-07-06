import React, { useState,useEffect } from 'react';
import axios from 'axios';
import * as S from '../Components/styled';
import { useHistory } from 'react-router-dom';

const  Home = ()=> {
  const history = useHistory();
  const [pokemonData, setPokemonData] = useState([])
  const HandlePesquisa = async () => {
    //acessando a api com axios get
    const data = [];
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    const repositories = response.data.results;
    for( let repository of repositories){
      const poke = {};
      const res= await axios.get(repository.url)
      poke.image = res.data.sprites.front_shiny
      poke.name = repository.name;
      data.push(poke)  
    }
    setPokemonData(data)
  }


  useEffect(()=>{
    HandlePesquisa()
  },[])

  //console.log(pokemonData)
  return (
      
      <S.ContainerPokemon>
      { pokemonData.map((pokemon,index) => {
        return(
          <S.CardPokemon>
          <S.NomePokemon> {pokemon.name}</S.NomePokemon>
          <img alt="pokemon ilustration" src={pokemon.image} />
          <S.Button>Comprar</S.Button> 
          </S.CardPokemon>
        )})}
       </S.ContainerPokemon>
      
  );
}

export default Home;
