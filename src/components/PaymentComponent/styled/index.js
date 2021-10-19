import styled from 'styled-components';

const component = styled.div.attrs({ className: 'payment' })`
    background: #fff;
    height: 700px;
    padding: 30px;

    input[type=text]  {
        border: none;
        border-bottom: 1px solid #666;
        outline: none;
        margin-top: 30px;
        width: 220px;
    }

    h1 {
        font-size: 30px;
    }

    h4 {
        font-size: 24px;
    }

    .tab {
        background: #30404E;
        color: #fff;
        border-radius: 20px;
        padding: 10px 20px;
        border: none;
        width: 180px;
    }

    button {
        background: #30404E;
        color: #fff;
        border-radius: 5px;
        padding: 10px 20px;
        border: none;
        padding: 10px 20px;
        width: 135px;
        margin-top: 20px;
    }

    span {
        font-size: 12px;
        margin-left: 10px;
    }


`;

export default component;
