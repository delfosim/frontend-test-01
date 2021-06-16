import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;

    .buttonAdd {
        background-color: transparent;
        border: none;
        position: fixed;
        z-index: 100;
        bottom: 0;
        margin-bottom: 50px;
        right: 0;
        margin-right: 50px;
    }

    @media (max-width: 800px) {
        .buttonAdd {
            display: none;
        }
    }
    
`;

export const Content = styled.div`
    display: flex; 
    justify-content: start;
    flex-direction: column;
    width: 950px;
    height: 450px;
    margin-top: 30px;
    background-color: #f5f5f5;


    .infosCardChart {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            margin-left: 10px;
        }
            
        .dropdown {
            margin-right: 10px;

            div {
                display: flex;
                flex-direction: column;
                z-index: 10;

                .dropdownItem {
                    padding: 10px 25px;
                    background-color: #f3f3f3f3;
                    color: #000000;
                    text-align: center;
                    text-decoration: none;
                    

                }
                
                .dropdownItem:hover {
                    background-color: #c5c5c5;
                }
            }
            
            .dropdownIcon {
                border: none;
                cursor: pointer;
            }
        }
    }

    @media (max-width: 800px) {
        width: 100%;
    }

`;
