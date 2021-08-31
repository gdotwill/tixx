import styled from 'styled-components';

const component = styled.div.attrs({ className: 'featured' })`
    border-radius: 5px;
    padding: 20px;
    background: #f6f6f6;

    h1 {
        font-size: 36px;
        color: #4B5563
    }


    h4 {
        color: #fff;
        font-size: 24px;
        font-weight: bold;
    }

    h5 {
        color: #fff;
        font-size: 18px;
        font-weight: bold; 
  
    }

    .featured-trips-info {
        position: absolute;
        bottom: 0;
        padding: 20px;
    }

`;

export default component;
