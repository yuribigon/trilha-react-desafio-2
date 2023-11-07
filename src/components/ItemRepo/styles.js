import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    button {
        background-color: #FAFAFA;
        border: 1px solid #FAFAFA;
        border-radius: 20px;
        text-decoration: none;
        height: 32px;
        width: 30%;
        color: #000;

        margin: 5px 0;

        &:hover {
            background-color: #FAFAFA40;
            cursor: pointer;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`