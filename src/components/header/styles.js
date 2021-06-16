import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    background-color: #303941;
    width: 100vw;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1140px;
    margin-bottom: 0;
    min-height: 100px;
    border: none;
    z-index: 100;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    .buttonAdd {
        display: none;
    }

    @media (max-width: 800px) {
        flex-direction: column;
        margin: 20px 0px;
        width: 0px;

        .buttonAdd {
            display: block;
            margin-top: 10px;
            margin-bottom: -10px;
            padding-top: 8px;
            background-color: #303941;
            box-shadow: none;
        }
    }
`;

export const LogoImg = styled.img`
    height: 67px;
    width: 146px;
    margin-top: -10px;

    @media (max-width: 800px) {
        margin-bottom: 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    width: 400px;
    background-color: #ffffff;
`;