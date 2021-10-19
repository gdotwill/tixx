import styled from 'styled-components';

const component = styled.div.attrs({ className: 'thank-you' })`
    background: #fff;
    padding: 100px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    input[type=text]  {
        border: none;
        border-bottom: 1px solid #666;
        outline: none;
        margin-top: 30px;
        width: 220px;
    }

    .header {
        font-size: 30px;
        font-weight: bold;
    }

    h1 {
        font-size: 30px;
        font-weight: bold;
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

    .detail {
        border-right: 1px solid #666;
    }

    .info {
        display: flex;
        margin-left: -10px;
    }

`;

export default component;
