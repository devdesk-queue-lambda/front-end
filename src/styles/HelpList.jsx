import styled from 'styled-components';
import * as v from './vars'

export const List=styled.section`
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    display:flex;
    flex-direction:column;
    margin:auto;
    ${v.FONT_STACK};
    padding:3rem .5rem;
    ${v.TABLET}{
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
    }
    ${v.DESKTOP}{
        width:100%;
        justify-content:space-evenly;
    }
`
export const Header=styled.header`
    position:fixed;
    top:0px;
    width:100%;
    background-color:${props=>props.theme.bgAccent};
    color:${props=>props.theme.accent};
    text-align:left;
    padding-left:1rem;
    display:flex;
    justify-content:space-between;
    ${v.FONT_STACK};
    select{
        position:relative;
        width:45%;
        height:2rem;
        margin:.5rem;
        right:1rem;
    }
`