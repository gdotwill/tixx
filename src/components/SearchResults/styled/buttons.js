import styled from 'styled-components';

const component = styled.div.attrs({ className: 'buttons' })`
    .buttons {
        background: #EBEBEB;
        text-align: center;
        font-size: 20px;
        font-style: italic;
        padding-top: 5px;
        padding-bottom: 5px;
        font-weight: bold;
    }

    .button {
        text-algn: center;

        &:hover {
            cursor: pointer;
        }
    }

    #active {
        border: 3px solid #33404D;
        border-radius: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    #inActive {
        border: 3px solid #EBEBEB;
        border-radius: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
    }
 
`;

export default component;
