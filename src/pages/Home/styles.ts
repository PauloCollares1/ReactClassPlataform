import styled from "styled-components";



export const GridContent = styled.section`

    background-color: ${(props) => props.theme.pallete.sistemColors.background};
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template: 1fr 7fr/ 1fr 8fr;
`;

export const Content = styled.div`
    grid-row: 1;
    grid-column: 2;
    background-color: aliceblue;
`;

export const SideMenu = styled.div`
    grid-row: 1 / -1;
    grid-column: 1;
    background-color: red;
`;