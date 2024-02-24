"use client";

import { Metadata } from "next";
import styled from "styled-components";



export const metadata: Metadata = {
    title: "404 - Pagina não encontrada"
};

const NotFoundStyles = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 1rem;
        margin-right: 1rem
    }

    h1 + h1 {
        font-weight: 300;
    }

    h1 + h1 + h1 {
        font-weight: 600;
        margin-left: 1rem;

    }

    h1 strong {
        color: #ef233c;
    }
`


export default function NotFound() {
    return (
        <NotFoundStyles>
            <h1>404 |</h1>
            <h1>Pagina não encontrada</h1>
            <h1>Nutri<strong>Balance</strong></h1>
        </NotFoundStyles>
    )
}