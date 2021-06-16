import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 8%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    background-color: #f5f5f5;

    h1 {
        margin-top: 10px;
        text-align: center;
    }

    form {
        margin: 20px 15px;
    }

    @media (max-width: 800px) {
        width: 90%;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 20px 0px;
    
    .buttons {
        margin: 0px 20px;
    }
`;

export const Coluns = styled.div `
    display: flex;
    justify-content: space-around;

    .itens {
        display: flex;
        flex-direction: column;
    }

    .values {
        display: flex;
        flex-direction: column;
    }
`;