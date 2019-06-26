import styled from 'styled-components';
import * as v from './vars'

export const Header=styled.header`
    box-sizing:border-box;
    position:sticky;
    top:0px;
    padding:0;
    left:0;
    width:100%;
    height:75px;
    background-color:${props=>props.theme.bgAccent};
    color:${props=>props.theme.accent};
    text-align:left;
    padding-left:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${v.FONT_STACK};

    span{
        display:inline-block;
        padding:1rem;
        margin:.5rem;
        border:2px groove ${props=>props.theme.accBorderColor};
    }

    select{
        position:relative;
        height:2rem;
        margin:.5rem;
        right:1rem;
        width:45%;
        ${v.TABLET}{
            width:225px;
            left:0;
            right:0;
        }
    }
    ${v.TABLET}{
        height:100vh;
        width:250px;
        flex-direction:column;
        justify-content:flex-start;
        flex-basis: 320px;
        padding:0;
    }
`