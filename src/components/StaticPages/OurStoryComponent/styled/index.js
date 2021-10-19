import styled from 'styled-components';

const component = styled.div.attrs({ className: 'bundles' })`
    h1 {
        font-size: 30px;
        color: #3B4654;
    }


    .imgCircle {
        border: 1px solid rgba(88,88,88,0.36);
        border-radius: 50%;
        height: 200px;
        width: 200px;
        position: relative;
        left: 20%;

        img {
            position: absolute;
            right: 0;
            left: 0;
            top: 0;
            bottom: 0;
            margin: auto auto;
        }

    }

    .featured-trips-info {
        color: #fff;
        position: absolute;
        bottom: 0;
        padding: 20px;
    }



`;

export default component;
