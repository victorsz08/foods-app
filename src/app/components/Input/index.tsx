import styled from "styled-components";


type IInput = {
    placeholder: string;
    value: string;
    type: string;
    onchange: (e: string) => void;
}

const InputStyled = styled.input`
    width: 43rem;
    padding: 1.3rem 2rem;
    border-radius: 4rem;
    border: none;
    background-color: #d3d3d3;
`

export function Input({ placeholder, value, type, onchange } : IInput) {
    return (
        <InputStyled type={type} placeholder={placeholder} value={value} onChange={e => onchange(e.target.value)}/>
    )
}