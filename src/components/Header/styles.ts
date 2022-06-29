import styled from "styled-components";



export const HeaderStyle = styled.header`

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 1vh;
    width: 100%;
    background-color: ${(props) => props.theme.pallete.sistemColors.backgroundHeader};

    border: solid 1px #95f1dd73;
`;

