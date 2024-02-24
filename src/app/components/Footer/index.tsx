'use client';

import styled from "styled-components";



const FooterStyled = styled.footer`
    background-color: #d3d3d3;
    height: 15rem;
    display: grid;
    justify-content: center;
    text-align: center;
    align-items: center;

    h1, strong {
        font-weight: 700;
        font-size: 1rem;
    }

    strong {
        color: #ef233c;
    }

    p {
        font-size: .8rem;
        font-weight: 200;
    }
`

export function Footer(){
    return (
        <FooterStyled>
            <div> 
                <h1>Nutri<strong>Balance</strong></h1>
                <p>Todos os direitos Reservados - 2024</p>
            </div> 
        </FooterStyled>
    )
}

