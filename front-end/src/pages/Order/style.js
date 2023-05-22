import styled from "styled-components";

export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    li{
        list-style: none;
    }
`;

export const Input = styled.input`
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Text = styled.textarea`
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 15px 30px; 
    border: none;
     border-radius: 4px;
    cursor: pointer;
`;