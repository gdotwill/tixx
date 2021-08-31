import styled from 'styled-components';

const component = styled.div.attrs({ className: 'banner' })`
    background-image: url('../../images/banner.png');
    background-size: cover;
    height: 850px;

    h1 {
        font-size: 82px;
        color: white;
        font-weight: bold;
       
    }

    .header {
        margin-top: 20%;
    }
  
`;

export default component;
