"use client";

import styled from "styled-components";


const AboutStyled = styled.section`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0 20vw;

    h1, strong {
        font-size: 3rem;
        margin-bottom: 4rem;
        font-weight: 800;
    }

    strong {
        color: #ef233c;
    }

    p {
        font-size: .9rem;
        color: #2b2d42;
        font-weight: 300;
        font-style: italic;
    }

    @media (max-width: 428px) {
        padding: 8vh 8vw;
        h1, strong {
            font-size: 1.7rem;
            margin-bottom: 4rem;
            font-weight: 800;
        }
    }

    @media (max-width: 376px) {
        padding: 8vh 8vw;
        h1, strong {
            font-size: 1.7rem;
            margin-bottom: 4rem;
            font-weight: 800;
        }
    }
`


export default function About() {
    return (
        <AboutStyled>
            <h1>Nutri<strong>Finder</strong></h1>
        <p>NutriFinder é muito mais do que apenas um aplicativo; 
            é o resultado de um projeto de estudo apaixonado pelo mundo da nutrição e tecnologia. 
            Desenvolvido por Victor Siqueira, um talentoso desenvolvedor com um interesse profundo em promover hábitos alimentares saudáveis, 
            este aplicativo é uma ferramenta inovadora projetada para capacitar os usuários a tomarem decisões mais conscientes sobre sua alimentação.

            Este aplicativo intuitivo e fácil de usar permite que os usuários pesquisem facilmente alimentos e visualizem suas informações nutricionais, 
            incluindo calorias, proteínas, carboidratos, gorduras e muito mais. Criado com uma abordagem centrada no usuário, NutriFinder oferece controle 
            total sobre a dieta, permitindo aos usuários monitorarem sua ingestão calórica e trabalharem em direção a seus objetivos de saúde e bem-estar.
        </p>
        
        </AboutStyled>
    )
}