import { NavLink } from 'react-router-dom';
import styled from "styled-components";



export const HeaderStyle = styled.header`

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 1vh;
    padding: 5px;
    width: 100%;
    border: solid 1px #95f1dd73;
    background-color: ${(props) => props.theme.pallete.sistemColors.backgroundHeader};

    h1{
        font-size: smaller;
        font-weight: normal;
    }
`;

export const NavlinkStyle = styled(NavLink)`
    color: white;
    margin-left: 2vw;
    font-size: smaller;
    text-decoration: none;
`;

