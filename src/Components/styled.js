import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width:100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #333;
`;
export const List = styled.ul`
    list-style: none;
    padding:0;
    margin: 0;
    fonta-family: sans-serif;
`;

export const ListItem = styled.li`
    margin:.5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
`;

export const ContainerHome = styled.div`
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
    
`;
export const Content = styled.div`
    align-items:center;
    justify-content: center;
`;

export const CardPokemon = styled.div`
    
  display:flex;
  flex-direction:column;
  background-color: #ddd;
  margin:5px;
  width:200px;
  border:1px solid #29272e;
  border-radius: 6px;
  :hover{
      box-shadow: 5px 5px 16px 0px rgba(138,138,138,1);
      cursor:pointer; 
  }

  img { 
  height:200px;
  object-fit:cover;
  }
`;

export const NomePokemon = styled.h2`
   font-size: 1.5em;
  text-align: center;
  text-transform:capitalize;
  color: #333;
`;

export const ContainerPokemon = styled.div`
    display:flex;
    flex-wrap: wrap;
    width:70%;
    margin:20px;
`;

export const PrecoPokemon = styled.h2`
   font-size: 1.5em;
  text-align: center;
  color: #da4925;
`;
export const DivCarrinho = styled.div`
    float:right;
    position:fixed;
    right:9px;
    top:27px;
    width:200px;
    height:400px;
    display:flex;
    border:1px solid #29272e;
    display:flex;
    flex-direction:column;
    overflow-y:auto;
`
export const CardCarrinho = styled.div`
 border:0.5px solid #29272e;
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 min-height:40px;
 align-items:center;
 padding: 0px 10px;

 p{
     text-transform:capitalize;
 }
`
export const ContainerGeral = styled.div`
    position:relative;
`

export const ContainerCarrinhoFixed = styled.div`
    position:fixed;
    width:200px;
    height:80px;
    top:412px;
    right:10px;
`

export const LinkHome = styled(Link)`
   display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: 1rem 0;
    color: #fff;
    -webkit-text-decoration: none;
    text-decoration: none;
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
`;

export const LinkA = styled.a`
color: white;
`;

export const ButtonRemove = styled.div`
    background-color: #910d0d;
    color: #fff;
    width:20px;
    height:20px;
    border-radius: 6px;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const ModalBackground = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #28272080;
    z-index:10;
    position:fixed;
    top:0px;
    text-align:center;
`;

export const ModalContainer = styled.div`
    width:400px;
    height:200px;
    align-items:center;
    justify-content:center;
    background-color: #fff;
    position:relative;
    border-radius:6px;


    button{
        width:100%;
        background-color: #318833;
        color: #fff;
        font-size:1.5em;
        display:flex;
        align-items:center;
        justify-content:center;
        position: absolute;
        bottom: 0;
        border-radius:0 0 6px 6px;
        border: 1px solid #318833;
    }
`;
