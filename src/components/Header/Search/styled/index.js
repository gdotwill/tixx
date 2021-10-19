import styled from 'styled-components';

const component = styled.div.attrs({ className: 'search-bar' })`
    background: #485460;
    font-weight: bold;

    .react-calendar {
        width: 350px !important;
        background: white !important;
        border: 1px solid #a0a096;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.125em;
        z-index: 100 !important;
    }

    .dropdown-calendar {
        padding: 0px;
        margin-top: 5px;
        background: #EBEBEB;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        width: 350px;
        outline: none;
        height: 120px;
        z-index: 100 !important;
    }

    input {
        background: #EBEBEB;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border: 1px solid #EBEBEB;
        width: 100%;
        outline: none;
        height: 40px;
        padding-left: 10px;
    }

    .close-destination {
        background: #EBEBEB;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding-top: 8px;
        border-right: 5px solid #EBEBEB;

        :hover {
            cursor: pointer;
        }
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
        width: 80px;
        outline: none;
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
            margin-left: -35px;
            

            li {
                font-weight: normal;
                font-size: 15px;
                line-height: 2em;

                :hover {
                    cursor: pointer;
                }
            }
        }
    }

    .dropdown-duration {
        margin-top: 5px;
        padding-left: 10px;
        background: #EBEBEB;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        border-right: 10px solid #EBEBEB;
        width: 100%;
        outline: none;
        height: 80px;
    }

    .dropdown-size {
        padding-left: 10px;
        margin-top: 5px;
        background: #EBEBEB;
        border-radius: 5px;
        border: 1px solid #EBEBEB;
        border-right: 10px solid #EBEBEB;
        width: 100%;
        outline: none;
        height: 190px;
    }

    .people {
        font-size: 15px;
        font-weight: normal;
    }

    .age {
        font-size: 10px;
        font-weight: normal;
        margin-top: -14px
    }

    .dials {
        height: 20px;
        width: 20px;

        :hover {
            cursor: pointer;
        }
    }

    .number {
        font-size: 13px;
        margin: 2px 12px 0px 12px;
    }
`;

export default component;
