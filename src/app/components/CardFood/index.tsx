'use client';

import styled from "styled-components";

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

    h3, h1, strong, h2 {
        color: #444054;
    }

    h2 strong, h2 {
        font-size: 1.5rem;
        color: #ef233c;
    }

    h2 {
        margin-bottom: 1.5rem;
    }

    h3 strong {
        font-size: .8rem;
    }

    h3 {
        font-size: .8rem;
        font-weight: 300;
    }
`

export function CardFood({ description, category, energy_kcal } : ICardFood) {
    return (
        <CardFoodStyled>
            <div className="info-foods">
                <h2><strong></strong>{description}</h2>
                <h3><strong>Categoria: </strong>{category}</h3>
                <h3><strong>Calorias: </strong>{parseInt(energy_kcal)}Kcal</h3>
            </div>
        </CardFoodStyled>
    );
};