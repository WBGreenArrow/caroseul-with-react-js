import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f4efe5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperContent = styled.div`
    flex: none;
    background-color: #fff;
    width: 80rem;
    height: 40rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const HeaderText = styled.div`
    h1 {
        margin-bottom: 1.5rem;
    }
`;

export const WrapperCarder = styled.div`
    max-width: 65.8rem;
    overflow: hidden;
    display: flex;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
`;

export const CaroseulContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const ButtonLeft = styled.span`
    display: block;
    height: 100%;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        width: 100%;
    }
`;
export const ButtonRigth = styled.span`
    display: block;
    height: 100%;
    width: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
        width: 100%;
    }
`;
