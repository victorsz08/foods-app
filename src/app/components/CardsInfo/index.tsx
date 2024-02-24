'use client';

import styled from "styled-components"


type ICard = {
    children: React.ReactNode;
    title: string;
    description: string;
}

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d3d3d3;
    width: 20rem;
    height: 23rem;
    padding: 1.5rem;
    border-radius: 1.2rem;

    svg {
        height: 4rem;
        width: 4rem;
        color: #2b2d42;
    }

    h2 {
        color: #444054;
        font-size: 1.2rem;
        margin: .8rem 0;
    }

    p {
        font-size: .8rem;
    }
`

export function CardInfo({ children, title, description } : ICard) {
    return (
        <StyledCard>
            {children}
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </StyledCard>
    )
}