import React, {useEffect, useState }from 'react';
import * as S from '../Components/styled';
import {useHistory} from 'react-router-dom';
function Repositories(){
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);
    const user = localStorage.getItem('user');
    useEffect(()=>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName != null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            //localStorage.clear();
        }else{
            history.push('/');
        }
       
       
    },[])

    return(
        <S.Container>
        <S.Title>Repositories</S.Title>
        <S.List>
           {repositories.map(repository =>{
                let url = `https://github.com/${user}/${repository}`;
               return(
                   <S.ListItem><S.LinkA href= {url} target="_blank">Repositório: {repository}</S.LinkA>
                   </S.ListItem>
               )
           })}
        </S.List>
        <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    )
}

export default Repositories;