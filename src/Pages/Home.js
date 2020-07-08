import React, { useState,useEffect } from 'react';
import axios from 'axios';
import * as S from '../Components/styled';
import { useHistory } from 'react-router-dom';

const  Home = ()=> {
  const history = useHistory();
  const [pokemonData, setPokemonData] = useState([])
  const[itemData, setItemData] = useState([])

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
      poke.preco = Math.floor(Math.random()*100)+1;
      data.push(poke)  
    }
    setPokemonData(data)
  }

   const ButtonComprar = async (nome,preco) =>{
    const item={};
    item.name = nome;
    item.preco = preco;
        await setItemData(item);
  }

  useEffect(()=>{
    HandlePesquisa()
  },[])

  //console.log(pokemonData)
  
  return (
      <S.ContainerGeral>
        <S.ContainerPokemon>
        { pokemonData.map((pokemon,index) => {
          return(
            <S.CardPokemon>
            <S.PrecoPokemon> R$: {pokemon.preco}</S.PrecoPokemon>
            <S.NomePokemon> {pokemon.name}</S.NomePokemon>
            <img alt="pokemon ilustration" src={pokemon.image} />
            <S.Button onClick= {() => ButtonComprar(pokemon.name,pokemon.preco)} >  Comprar  </S.Button> 
            </S.CardPokemon>
          )})}
         
        </S.ContainerPokemon>
        <S.DivCarrinho>
        { itemData?.map((item,index) => {
            return(
              <S.CardCarrinho>
                {item.name}  R$:{item.preco}
                </S.CardCarrinho>
            )})
        } 
         <p> Total: R$10,00</p>
          <S.Button>Finalizar</S.Button> 
        </S.DivCarrinho>
      </S.ContainerGeral>
  );
}

export default Home;
