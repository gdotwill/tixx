import styled from 'styled-components';

const component = styled.div.attrs({ className: 'results' })`
    border-radius {
        border-radius: 5px;
    }

    z-index: 1;

    background: #fff;

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

    .btn-details {
        border: 2px solid #133d5a;
        border-radius: 5px;
        margin-top: 20px;
        width: 100%;
        background: none;
        height: 40px;
    }

    .btn-book {
        border: 2px solid #133d5a;
        border-radius: 5px;
        margin-top: 10px;
        width: 100%;
        background: #1f2937;
        height: 40px;
        color: #fff;
    }

    .share {
        font-size: 12px;
    }

    .share-wrapper {
        text-align: center;
        margin-top: 10px;

        :hover {
            cursor: pointer;
        }
    }

    .share-icon {
        color: #FC5A5A;
        height: 24px;
        width: 24px;
    } 

    .book-icon {
        height: 22px;
        width: 22px;
    } 
    
    .review {
        font-size: 12px; 
        margin-left: 5px;
    }

    .review-wrapper {
        margin-top: 50px; 
        text-align: right; 
    }

    .star-full {
        color: #fbc531;
    }

    .star-empty {
        color: #666;
    }

    .featured-trips {
        background-size: cover;
        height:350px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px
    }    

`;

export default component;
