'use client';

import Link from "next/link";
import { styled } from "styled-components";


const HeaderStyled = styled.header`
        width: 100vw;
        display: flex;
        justify-content: space-around;
        padding: 1.2rem 3rem;
        align-items: center;
        box-shadow: 0 0 2px #8d99ae;
        position: fixed;
        background-color: #edf2f4;
        z-index: 10000;

        div {
            display: flex;
        }

        div, h2 {
            color: #2b2d42;
            font-size: 2rem;
            font-weight: 800;
        }

        div, strong {
            color: #ef233c;
            font-weight: 800;
        }

        a {
            text-decoration: none;
        }

        nav, a {
            font-weight: 600;
            font-size: .9rem;
            margin: 0 1rem;
            color: #2b2d42;
        }
`


export function Header() {
    return (
        <HeaderStyled>
            <Link href="/">
                <div>
                    <h2>Nutri</h2>
                    <h2><strong>Finder</strong></h2>
                </div>
            </Link>
            <nav>
                <Link href="/">HOME</Link>
                <Link href="/search">PESQUISAR ALIMENTOS</Link>
                <Link href="/about">SOBRE</Link>
            </nav>
        </HeaderStyled>
    )
}


