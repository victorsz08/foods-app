

import styled from "styled-components";
import { PiBowlFoodFill } from "react-icons/pi";
import { Suspense } from "react";
import Loading from "@/app/(pages)/search/loading";

type ICardFood = {
    description: string;
    category: string;
    energy_kcal: string;
};


const CardFoodStyled = styled.section`
    background-color: #d3d3d3;
    padding: 2rem;
    border-radius: 1.5rem;
    margin: .5rem 0;
    display: flex;
    align-items: center;
    text-align: start;

    svg {
        height: 6rem;
        width: 6rem;
        color: #ef233c;
        margin-right: 1rem;
    }

    h3, h1, strong, h2 {
        color: #444054;
    }

    h2 strong, h2 {
        font-size: 1.5rem;
        color: #000;
    }

    h2 {
        margin-bottom: 1.5rem;
    }

    h3 strong {
        font-size: 1rem;
        font-weight: 500;
    }

    h3 {
        font-size: 1rem;
        font-weight: 300;
    }

    @media (max-width: 376px) {
        flex-direction: column;
        text-align: center;
        svg {
            height: 5rem;
            width: 5rem;
            color: #ef233c;
            margin-right: .5rem;
        }
    }
`

export function CardFood({ description, category, energy_kcal } : ICardFood) {
    return (
        <Suspense fallback={<Loading/>}>
        <CardFoodStyled>
            <PiBowlFoodFill/>
            <div className="info-foods">
                <h2><strong></strong>{description}</h2>
                <h3><strong>Categoria: </strong>{category}</h3>
                <h3><strong>Calorias: </strong>{parseInt(energy_kcal)}Kcal</h3>
                <h3><strong>Peso:</strong> 100g</h3>
            </div>
        </CardFoodStyled>
        </Suspense>
    );
};