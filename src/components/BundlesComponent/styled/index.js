import styled from 'styled-components';

const component = styled.div.attrs({ className: 'bundles' })`
    .tabs {
        display: flex;    
    }

    .tab {
        background: #EBEBEB;
        color: #000;
        border-radius: 20px;
        padding: 10px 20px;
        border: none;
    }

    .active {
        background: #30404E;
        color: #fff;
    }

    .overview {
        
    }

    .flatpickr-input {
        border: 1px solid #666;
        border-radius: 20px;
        width: 200px;
        height: 40px;
        padding: 7px 15px;
    }

    .check {
        background: #A2C956;
        border-radius: 20px;
        width: 200px;
        height: 40px;
        padding: 8px 15px;
        margin-top: 15px;
        border: 1px solid #666;

        :hover {
            cursor: pointer;
        }
    }

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

    .bundle-img-step {

    }

    .bundel-info {
        color: #6B7280;
    }

    h3 {
        color: #3B4654
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
        background: #30404E;
        height: 60px;
        color: #fff;
    }

    .btn-share {
        border: 2px solid #EBEBEB;
        border-radius: 5px;
        margin-top: 10px;
        width: 100%;
        background: #EBEBEB;
        height: 60px;
        color: #666;
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
    
    label {
        display: block;
        font-size: 14px;
    }

    input {
        border: 1px solid #666;
        border-radius: 4px;
        width: 100%;
    }

    textarea {
        border: 1px solid #666;
        border-radius: 4px;
        width: 100%;
        height: 100px;
    }

`;

export default component;
