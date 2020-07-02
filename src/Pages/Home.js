import React, { useState,useEffect } from 'react';
import axios from 'axios';
import * as S from '../Components/styled';
import { useHistory } from 'react-router-dom';

const  Home = ()=> {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const[erro, setErro] =  useState(false);
  const[repositoriesName, setRepositoriesName] = useState([])
  const HandlePesquisa = () =>{
    //acessando a api com axios get
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
      const repositories = response.data.results;
       const responseNames =[];
      repositories.map((repository) =>{
        responseNames.push(repository.name);
       
      });
      setRepositoriesName(responseNames)
      //console.log(repositoriesName);
      //salvando no Storage
      //localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      //localStorage.setItem('user',usuario);
      //mudando para a pagina repositories
      //setErro(false);
     // history.push('/repositories')
    }).catch(err =>{
      setErro(true);
    });
  }

useEffect(()=>{
  HandlePesquisa()
},[])


  return (
    
    <S.ContainerHome>
       { repositoriesName.map(name =>{
        return<h1>{name}</h1>
      })}
      <S.Content>
      <S.Input  className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
    
      
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro, Tente Novamente</S.ErrorMsg> : ''}
    </S.ContainerHome>
  );
}

export default Home;
