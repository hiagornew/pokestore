import React, { useState,useEffect } from 'react';
import axios from 'axios';
import * as S from '../Components/styled';
import { useHistory } from 'react-router-dom';

const  Home = ()=> {
  const history = useHistory();
  const [pokemonData, setPokemonData] = useState([])
  const HandlePesquisa = () => {
    //acessando a api com axios get
    const data = [];
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
      const repositories = response.data.results;
      repositories.map((repository) => {
        const poke = {};
        axios.get(repository.url).then(res => { 
          poke.image = res.data.sprites.front_shiny
        })
        poke.name = repository.name;
        data.push(poke)
       
      });
      setPokemonData(data)
      
    }).catch(err =>{
      console.log(err)
    });
  }


  useEffect(()=>{
    HandlePesquisa()
  },[])

  console.log(pokemonData)
  return (
    <S.ContainerHome>
      <h1>Loja</h1>
      <div>
      { pokemonData?.map((pokemon,index) => {
        return(
        <S.CardPokemon key={`pokemon-${index}`}> 
          <S.NomePokemon> {pokemon.name}</S.NomePokemon>
          <img alt="pokemon ilustration" src={pokemon.image} />
          
          <S.Button>Comprar</S.Button>
        </S.CardPokemon>)
      })}
      </div>
    </S.ContainerHome>
  );
}

export default Home;
