'use client';

import { Input } from "@/app/components/Input";
import { useState } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";



const StyledSearch = styled.section`
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;

    .search-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .search-container, h1 {
        font-size: 2rem;
        color: #ef233c;
        margin-bottom: 2rem;
    }

    .search-container .input-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    .search-container .input-container button {
        width: 3rem;
        height: 3rem;
        position: absolute;
        transform: translateX(-1rem);
        border: none;
        background-color: #d3d3d3;
        cursor: pointer;
    }

    .search-container .input-container button svg {
        width: 2rem;
        height: 2rem;
        color: #ef233c;
    }
`


export default function Search() {
    const [search, setSearch] = useState("");

    return (
        <StyledSearch>
            <div className="search-container">
                <h1>Pesquise um alimento</h1>
                <div className="input-container">    
                    <Input type="text" placeholder="Ex: Ovos Cozidos, Frango Assado, Castanhas..." value={search} onchange={setSearch}/>
                    <button><IoSearchSharp/></button>
                </div>    
            </div>
        </StyledSearch>
    )
}




