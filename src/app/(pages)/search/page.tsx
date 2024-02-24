'use client';

import { Input } from "@/app/components/Input";
import { useState } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { CardFood } from "@/app/components/CardFood";
import { IoArrowRedo } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";



const StyledSearch = styled.section`
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 200px 0;
    text-align: center;

    p {
        font-style: italic;
        font-size: .8rem;
        color: #8d99ae;
    }

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

    .navigation-page {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 2rem;
    }

    .navigation-page button {
        background-color: transparent;
        border: none;
        color: #ef233c;
        font-size: 1.6rem;
        cursor: pointer;
    }

    .navigation-page p {
        margin: 0 .3rem;
        font-size: 1rem;
        padding: .4rem;
        font-weight: 600;
    }

    .navigation-page p + p {
        font-size: .9rem;
    }

    .navigation-page p + p + p{
        font-size: 1rem;
    }
`


export default function Search() {
    const [search, setSearch] = useState("Arroz");
    const [page, setPage] = useState(1);
    const totalPages = 10;

    function navigationUndo(){
        if(page <= 1){
            return setPage(1)
        }else {
            return setPage(page -1);
        }
    }

    function navigationNext() {
        if(page >= totalPages){
            return setPage(totalPages);
        }else {
            return setPage(page + 1);
        }
    }

    return (
        <StyledSearch>
            <div className="search-container">
                <h1>Pesquise um alimento</h1>
                <div className="input-container">    
                    <Input type="text" placeholder="Ex: Ovos Cozidos, Frango Assado, Castanhas..." value={search} onchange={setSearch}/>
                    <button><IoSearchSharp/></button>
                </div>
            </div>
            {search && <p>Resultados da busca: {search}</p>}
            <div className="response-search">
                <CardFood description="Arroz, integral, cozido" category="Cereais e derivados" energy_kcal="123.5348925"/>
                <CardFood description="Arroz, integral, cozido" category="Cereais e derivados" energy_kcal="123.5348925"/>
                <CardFood description="Arroz, integral, cozido" category="Cereais e derivados" energy_kcal="123.5348925"/>
                <CardFood description="Arroz, integral, cozido" category="Cereais e derivados" energy_kcal="123.5348925"/>
                <CardFood description="Arroz, integral, cozido" category="Cereais e derivados" energy_kcal="123.5348925"/>
                <CardFood description="Arroz, integral, cozido" category="Cereais e derivados" energy_kcal="123.5348925"/>
                <CardFood description="Arroz, integral, cozido" category="Cereais e derivados" energy_kcal="123.5348925"/>
            </div>
            <div className="navigation-page">
                <button onClick={navigationUndo}><IoArrowUndoSharp/></button>
                <p>{page}</p>
                <p>de</p>
                <p>{totalPages}</p>
                <button onClick={navigationNext}><IoArrowRedo/></button>
            </div>
        </StyledSearch>
    )
}




