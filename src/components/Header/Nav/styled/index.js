import styled from 'styled-components';

const component = styled.div.attrs({ className: 'nav-link' })`
    background: #485460;
    font-weight: bold;
    
    img {
        width: 40%;
        margin-left: 5px;
    }

    a {
        color: #fff;
    }

    ul {
        list-style-type: none;
        color: white;
        margin-top: 10px;

        li {
            color: #fff;
            float: right;
            margin-left: 20px ;
            text-decoration: none;  
        }

        :hover {
            cursor: pointer;
        }

    }

    button {
        background: #FC5A5A;
        border-radius: 5px;
        color: #fff;
        padding: 10px 20px;
        font-weight: bold;
        border: 1px solid #FC5A5A; 
    }
`;

export default component;
