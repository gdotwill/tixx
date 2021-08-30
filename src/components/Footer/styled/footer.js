import styled from 'styled-components';

const component = styled.div.attrs({ className: 'footer' })`
    background: #2c3745;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 80px;

    h1 {
        font-size: 40px;
        color: #fff;
    }

    input {
        margin-top: 20px;
        width: 500px;
        background: #fff;
        border: 1px solid #fff;
        border-radius: 5px;
        height: 50px;
        outline: none;
        padding-left: 20px;
    }

    button {
        background: #4cb5ab;
        border: 1px solid #4cb5ab;
        color:#fff;
        border-radius: 5px;
        height: 50px;
        width: 150px;
        margin-left: 10px;
    }
 
`;

export default component;
