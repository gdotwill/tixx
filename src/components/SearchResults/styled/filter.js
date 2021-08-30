import styled from 'styled-components';

const component = styled.div.attrs({ className: 'filter' })`
    background: #EBEBEB;
    border-radius: 5px;
    padding: 20px;

    h4 {
        font-size: 16px;
        color: #485460;
        font-weight: bold;
    }

    ul {
        text-decoration: none;
        list-style-type: none;

        li {
            margin-left: -40px;
            margin-top: 10px;
        }
    }

    input {
        margin-right: 10px;
        height: 20px;
        width: 20px;
        border-radius: 20px;
        background: red;
    }

`;

export default component;
