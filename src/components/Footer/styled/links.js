import styled from 'styled-components';

const component = styled.div.attrs({ className: 'links' })`
    a {
        color: #000
    }
    ul { 
        margin-left: -35px;
        
        li {
            color: #000;
            list-style-type: none;
        }
    }
 
`;

export default component;
