import styled from 'styled-components';

const component = styled.div.attrs({ className: 'search-bar' })`
    background: #485460;
    font-weight: bold;

    input {
        background: #EBEBEB;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        width: 100%;
        outline: none;
        height: 40px;
        padding-left: 20px;
    }

    label {
        color: #96A2AC;
        font-size: 11px;
    }

    button {
        background: none;
        border-radius: 5px;
        border: 2px solid #fff;
        padding: 2px 20px;
        margin-top: 30px;
        height: 40px;
        width: 80px
    }

    .col-md-1, .col-md-2, .col-md-3, .col-md-5  {
        padding-right: 5px;
        padding-left: 5px;
    }

    .dropdown {
        padding: 20px;
        margin-top: 5px;
        background: #EBEBEB;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        width: 100%;
        outline: none;
        height: 270px;
       
        h2 {
            font-size: 20px;
        }

        .dropdown-list {
            height: 200px;
            overflow-y: scroll;
        }

        ul {
            list-style-type: none;
            margin-top: 20px;
            margin-left: -35px;
            

            li {
                font-weight: normal;
                font-size: 15px;
            }
        }
    }

    .dropdown-calendar {
        padding: 20px;
        margin-top: 5px;
        background: #EBEBEB;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        width: 100%;
        outline: none;
        height: 120px;
    }
    
    .dropdown-duration {
        padding: 20px;
        margin-top: 5px;
        background: #EBEBEB;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        width: 100%;
        outline: none;
        height: 60px;
    }
`;

export default component;
