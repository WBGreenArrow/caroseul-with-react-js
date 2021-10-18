import styled from "styled-components";

export const CarderContent = styled.div`
    flex: none;
    margin: 0 1rem;
    width: 20rem;
    height: 23rem;
    border-radius: 2rem;
    overflow: hidden;
    background-color: #fff;
    border: solid rgb(161, 159, 154, 0.3) 0.1rem;
`;

export const Img = styled.div`
    width: 100%;
    height: 15rem;
    background-image: url(${({ src }) => src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 8rem;

    h1 {
        font-size: 2rem;
        font-weight: 700;
    }

    h2 {
        color: #a19f9a;
    }
`;
