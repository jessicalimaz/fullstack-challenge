import styled from 'styled-components'

export const Header=styled.header` 
    display: flex;
    background-color: #C50705;
    align-items: center;
    justify-content: center;

    h1{
        color: #F6A002;
        font-family: "Rowdies";
    }

    #delivery{
        color: transparent;
        -webkit-text-stroke: 1px #F6A002; 
    }
`
export const divButton = styled.div`
    width: 100%;
    text-align: center;
`
export const Button = styled.button`
    font-weight: bold;
    position: fixed;
    bottom: 0;
    margin-bottom: 15px;
    left: 50%;
    transform: translateX(-50%);

    background-color: #4CAF50;
    color: white;
    padding: 15px 30px; 
    border: none;
    border-radius: 4px;
    cursor: pointer;

    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2); 

    &:hover {
        background-color: #3e8e41;
    }

    &:active {
        background-color: #2e6227;
    }
`

export const Card = styled.div`
    min-width: 200px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    background-color: #fff;

    h2 {
        font-size: 20px;
        font-weight: bold;
        margin: 10px;
    }

    p {
        font-size: 18px;
        font-weight: bold;
        color: #4CAF50;
        margin: 10px;
    }

    button {
        font-size: 16px;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: #fff;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin: 10px;
        transition: background-color 0.3s;
    }

    button:hover {
        background-color: #3e8e41;
    }
`

export const DivCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    justify-content: center;
    align-items: center;
`
