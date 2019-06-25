import styled from 'styled-components';
import * as v from './vars'

export const List=styled.section`
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    display:flex;
    flex-direction:column;
    margin:auto;
    ${v.FONT_STACK};
    padding:.5rem;
    ${v.TABLET}{
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
    }
    ${v.DESKTOP}{
        width:100%;
        height:100%;
        justify-content:space-evenly;
    }
    `
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
        width:45%;
        height:2rem;
        margin:.5rem;
        right:1rem;
        ${v.TABLET}{
            max-width:300px;
        }
    }
`