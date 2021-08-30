import styled from 'styled-components';

const component = styled.div.attrs({ className: 'results' })`
    border-radius {
        border-radius: 5px;
    }

    .top-pick {
        background: #1F2937;
        border-radius: 20px;
        color: #fff;
        width: 80px;
        font-size: 11px;
        text-align: center;
    }

    img {
        margin-right: 5px;
    }
`;

export default component;
