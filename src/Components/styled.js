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
    height:100vh;
    flex-direction:column;
    display: flex;
    align-items:center;
    justify-content:center;
`;
export const Content = styled.div`
    align-items:center;
    justify-content: center;
`;

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
