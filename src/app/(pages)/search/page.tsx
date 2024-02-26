'use client';

import { Input } from "@/app/components/Input";
import { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { CardFood } from "@/app/components/CardFood";
import api from "@/app/services/api";
import Loader from "@/app/components/Loader";


type IFood = {
    id?: number;
    description: string;
    category: string;
    energy_kcal: string;
}



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

    #alert {
        font-size: .8rem;
        color: #2b2d42;
        margin-bottom: 2rem;
        padding: 0 1rem;
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

    .search-container form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    .search-container form button {
        width: 3rem;
        height: 3rem;
        position: absolute;
        transform: translateX(-1rem);
        border: none;
        background-color: #d3d3d3;
        cursor: pointer;
    }

    .search-container form button svg {
        width: 2rem;
        height: 2rem;
        color: #ef233c;
    }

    .response-search h3 {
        color: #2b2d42;
        margin: 1rem 0;
    }


    @media (max-width: 811px) {
        .search-container, h1 {
            font-size: 1.4rem;
            color: #ef233c;
            margin-bottom: 2rem;
        }
    }
`


export default function Search() {
    const [search, setSearch] = useState("");
    const [foods, setFoods] = useState<IFood[]>([]);
    const [notFound, setNotFound] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setNotFound("");
    },[search])


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        setFoods([]);
        setLoading(true);
        e.preventDefault();


        try {
            const response = await api.get(`foods?pePage=100&search=${search}`);
            if(response.data.length === 0) {
                setNotFound(`Nenhum resultado para: ${search}`);
                setLoading(false);
            }else {
                setLoading(false)
                setFoods(response.data);
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        };
    };

    

    return (
        <StyledSearch>
            <div className="search-container">
                <h1>Pesquise um alimento</h1>
            <h3 id="alert">Todos os Valores Caloricos dos alimentos são baseados em 100g desse mesmo alimento. Ex: Arroz - Calorias: 100kcal(100g de Arroz)</h3>
                <form onSubmit={handleSubmit}>
                    <Input type="text" placeholder="Ex: Ovos Cozidos, Frango Assado, Castanhas..." value={search} onchange={setSearch}/>
                    <button type="submit"><IoSearchSharp/></button>
                </form>    
                </div>
            <div className="response-search">
                {loading && <Loader/>}
                {notFound && <h3>{notFound}</h3>}
                {foods && foods.map(food => (
                    <CardFood key={food.id} description={food.description} category={food.category} energy_kcal={food.energy_kcal}/>
                ))}
            </div>
        </StyledSearch>
    )
}




