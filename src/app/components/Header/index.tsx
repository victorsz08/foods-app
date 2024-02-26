'use client';

import Link from "next/link";
import { styled } from "styled-components";2
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const HeaderStyled = styled.header`
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.2rem 3rem;
        box-shadow: 0 0 2px #8d99ae;
        position: fixed;
        background-color: #edf2f4;
        z-index: 1000;

        div {
            display: flex;
            align-items: center;
        }

        a div h2 {
            color: #2b2d42;
            font-size: 2rem;
            font-weight: 800;
        }

        svg {
            color: #ef233c;
            width: 1.6rem;
            height: 1.6rem;
            display: none;
            cursor: pointer;
        }

        div strong {
            color: #ef233c;
            font-weight: 800;
        }

        a {
            text-decoration: none;
        }

        nav-list, a {
            font-weight: 600;
            font-size: .9rem;
            margin: 0 1rem;
            color: #2b2d42;
        }

        @media (max-width: 812px) {
            padding: .5rem 1rem;


            a div h2 {
                color: #2b2d42;
                font-size: 1.4rem;
                font-weight: 800;
                transform: translateY(1rem)
            }

            .nav-list.active {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                top: 7vh;
                background-color: #edf2f4;
                width: 70%;
                height: 100vh;
                right: 0;
                padding: 2rem;
                transform: translateX(0%);
                transition: .2s;
            }

            .nav-list.active a {
                margin-bottom: 2.5rem;
            }

            svg {
                display: block;
            }

            .nav-list {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                top: 6vh;
                background-color: #fff;
                width: 70%;
                height: 100vh;
                right: 0;
                padding: 2rem;
                transform: translateX(100%);
                transition: .2s;
        }

        .nav-list, a {
            margin-bottom: 2.5rem;
        }

        @media (max-width: 376px) {
            .nav-list.active {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                top: 7vh;
                background-color: #edf2f4;
                width: 80%;
                height: 100vh;
                right: 0;
                padding: 2rem;
                transform: translateX(0%);
                transition: .2s;
            }
        }
`


export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleClick() {
        setMenuOpen(!menuOpen)
    }

    return (
        <HeaderStyled>
            <Link href="/">
                <div>
                    <h2>Nutri</h2>
                    <h2><strong>Finder</strong></h2>
                </div>
            </Link>
            <button onClick={handleClick}><GiHamburgerMenu/></button>
            <nav className={!menuOpen ? "nav-list" : "nav-list active"}>    
                    <Link href="/" >HOME</Link>
                    <Link href="/search" >PESQUISAR ALIMENTOS</Link>
                    <Link href="/about" >SOBRE</Link>
            </nav>
        </HeaderStyled>
    )
}


