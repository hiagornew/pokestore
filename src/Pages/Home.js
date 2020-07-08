import React, { useState,useEffect } from 'react';
import axios from 'axios';
import * as S from '../Components/styled';
import { useHistory } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const  Home = ()=> {
  const history = useHistory();
  const dataCarrinho = [];
  
  const [pokemonData, setPokemonData] = useState([])
  const[itemData, setItemData] = useState([])
  const[totalPreco, setTotalPreco] = useState(0)
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
     const itens = [...itemData]
    const item={};
    item.name =  nome;
    item.preco = preco;
    setTotalPreco(totalPreco +preco);
    itens.push(item);
    await setItemData(itens);
    console.log(itemData)
  }

  const RemoveItem = (index,preco) =>{
    const itens =[...itemData]
    itens.splice(index,1)
    setItemData(itens)
    setTotalPreco(totalPreco -preco);
  }

  const SubmitCheckout = ()=>{
    setItemData([]);
    setTotalPreco(0);
    toggle();
  }

  useEffect(()=>{
    HandlePesquisa()
  },[])

  //console.log(pokemonData)
  
  return (
    <>  
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
              <S.CardCarrinho key={`card-${index}`}>
                <p>{item.name}  R$:{item.preco}</p>
                <S.ButtonRemove onClick= {() => { RemoveItem(index,item.preco)}} >  X  </S.ButtonRemove> 
                
              </S.CardCarrinho>
              
            )})
            
        }
        </S.DivCarrinho>
        <S.ContainerCarrinhoFixed>
         <p> Total: R${totalPreco}</p>
          <S.Button onClick={() => toggle()} >Finalizar</S.Button> 
        </S.ContainerCarrinhoFixed>
      </S.ContainerGeral>

      {modal &&
        <S.ModalBackground>
          <S.ModalContainer>
            <h1>Sucesso</h1>
            <p>Sua Compra foi finalizada</p>
            <Button onClick={() => SubmitCheckout()}>Confirmar</Button>
          </S.ModalContainer>
        </S.ModalBackground>
      }
    </>
  );
}

export default Home;
