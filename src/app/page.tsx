/* eslint-disable @next/next/no-img-element */
'use client';

import styled from "styled-components";
import Link from "next/link";
import { CardInfo } from "./components/CardsInfo";

import { IoHeartCircleSharp } from "react-icons/io5";
import { AiFillControl } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";


const MainStyled = styled.main`
  padding-top: 80px;
  text-align: center;
  height: 100%;
  padding: 90px 0 ;

  img {
    height: 70vh;
    width: 100vw;
    object-fit: cover;
    filter: brightness(60%);
  }

  .info-container {
    color: #edf2f4;
    position: absolute;
    transform: translateX(33vw) translateY(-40vh);
  }

  h1 {
    font-size: 4rem;
    color: #edf2f4;
  }

  .cards-information-container {
    display: flex;
    justify-content: space-evenly;
    margin: 5rem 0;
  }

  a {
    text-align: center;
    color: #edf2f4;
    padding: .6rem 1.3rem;
    border-radius:1.4rem;
    text-decoration: none;
    background-color: #ef233c;
  }

  @media (max-width: 428px) {
    .info-container {
      color: #edf2f4;
      transform:  translateY(-40vh);
    }   

    h1 {
      font-size: 2.2rem;
      color: #edf2f4;
    }

    p {
      font-size: .8rem;
      padding: 0 .8rem;
    }
  }

  @media (max-width: 376px) {
    .info-container {
      color: #edf2f4;
      transform:  translateY(-40vh);
    }

    h1 {
      font-size: 2.2rem;
      color: #edf2f4;
    }

    p {
      font-size: .8rem;
      padding: 0 .8rem;
    }

    .cards-information-container {
      flex-direction: column;
      align-items: center;
      justify-content: space-beetween;
    }

  }

  @media (max-width: 811px) {
    .info-container {
      color: #edf2f4;
      transform:  translateY(-40vh) translateX(10v);
    }

    .cards-information-container {
      flex-direction: column;
      align-items: center;
      justify-content: space-beetween;
    }
  }
`



export default function Home() {
  return (
    <MainStyled>
      <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nutri Finder Image"/>
      <div className="info-container">
        <h1>NutriFinder</h1>
        <p>Conheça o poder dos alimentos. Controle suas calorias, transforme sua saúde.</p>
      </div>
      <div className="cards-information-container">
        <CardInfo key="1" title="Consciência nutricional" description="O aplicativo fornece informações detalhadas sobre a composição nutricional dos alimentos,
        ajudando os usuários a fazerem escolhas mais conscientes e saudáveis em sua dieta diária."
        >
          <IoHeartCircleSharp/>
        </CardInfo>
        <CardInfo key="2" title="Controle de calorias" description="Com a capacidade de buscar e visualizar facilmente o conteúdo calórico dos alimentos, os usuários podem monitorar 
        sua ingestão calórica e trabalhar em direção a seus objetivos de saúde e bem-estar, seja para perda de peso, manutenção ou ganho."
        >
          <AiFillControl/>
        </CardInfo>
        <CardInfo key="3" title="Personalização e planejamento" description="O aplicativo permite aos usuários personalizar suas preferências alimentares e metas individuais, fornecendo recomendações e sugestões 
        adaptadas às suas necessidades específicas, facilitando o planejamento de refeições e lanches de acordo com seus objetivos nutricionais."
        >
          <MdDashboardCustomize/>
        </CardInfo>
      </div>
      <Link href="/search">PESQUISAR ALIMENTOS</Link>
    </MainStyled>
  );
}



