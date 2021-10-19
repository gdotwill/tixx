import styled from 'styled-components';

const component = styled.div.attrs({ className: 'testimonial' })`
    background-image: url('../../../images/bg.png');
    margin-top: 40px;
    background-size: cover;
    padding: 20px;

    .card {
        background: #455461;
        text-align: center;
        padding: 10px;
        color: #fff;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .wrapper {
        padding: 20px;
        border: 1px solid #fff;
    }

`;

export default component;
