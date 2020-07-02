import React, { useState } from 'react';
import axios from 'axios';
import * as S from '../Components/styled';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const[erro, setErro] =  useState(false);

  function HandlePesquisa(){
    //acessando a api com axios get
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName =[];
      repositories.map((repository) =>{
        repositoriesName.push(repository.name);
      });
      //salvando no Storage
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      localStorage.setItem('user',usuario);
      //mudando para a pagina repositories
      setErro(false);
      history.push('/repositories')
    }).catch(err =>{
      setErro(true);
    });
  }


  return (
    <S.ContainerHome>
      <S.Content>
      <S.Input  className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={HandlePesquisa} >Pesquisar</S.Button>
      
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro, Tente Novamente</S.ErrorMsg> : ''}
    </S.ContainerHome>
  );
}

export default App;
