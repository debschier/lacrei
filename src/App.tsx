import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header>
        <Logo>Lacrei</Logo> 
        <Nav>
          <UnorderedList>
            <Link href="#">
              <ListItem>Home</ListItem>
            </Link>
            <Link href="#">
              <ListItem>Pessoa usuaria</ListItem>
            </Link>
            <Link href="#">
              <ListItem>Profissional</ListItem>
            </Link>
          </UnorderedList>
        </Nav>
      </Header>
      <Main>
        <Coluna1> 
     <Tittle>Boas vindas a Lacrei Saúde</Tittle>   
     <Subtittle>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Subtittle>

     <Button1>Pessoa Usuária</Button1>
     <Button2>Profissional</Button2>
     </Coluna1>

     <Coluna2>  
     <img src="https://desafio-lacrei-five.vercel.app/_next/static/media/home.87217388.svg" alt="Imagem de médica segurando prontuario" />
     </Coluna2>


      </Main>
      <footer></footer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
`;

const Header = styled.header`
  background: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-style: normal;
`;

const Logo = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  padding-left: 64px;
  color: #018762;
`;

const UnorderedList = styled.ul`
  text-decoration: none;
  display: flex;
  justify-content: right;
`;

const ListItem = styled.li`
  float: right;
  list-style-type: none;
  padding-left: 40px;
  font-weight: 700;
  font-size: 16px;
  color: #1f1f1f;
`;

const Nav = styled.nav`
  flex-grow: 1;
  display: inline-block;
  vertical-align: middle;
  padding-right: 64px;
`;
const Link = styled.a``;

const Main = styled.main`
display: flex;
padding: 64px;
`;

const Coluna1 = styled.div`
width: 40%;
`;

const Coluna2 = styled.div`
width: 60%;
text-align: right;
`;

const Tittle = styled.h1`
font-weight: 700;
font-size: 48px;
line-height: 65px;
color: #1F1F1F;
`;

const Subtittle = styled.h2`
font-weight: 400;
font-size: 24px;
line-height: 33px;
color: #515151;
padding-bottom: 48px;
`;

const Button1 = styled.button`
width: 192px;
height: 48px;
background: #018762;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: none;
border-radius: 8px;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: #FFFFFF;
margin-right: 69px;
`;

const Button2 = styled.button`
width: 192px;
height: 48px;
background: #FFFFFF;
border: 2px solid #018762;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
border: none;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: #018762;
`;

