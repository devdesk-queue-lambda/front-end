import styled from 'styled-components';
import * as v from './vars'

export const List=styled.section`
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    max-width: 1000px;
    margin:auto;
    padding:3rem .5rem;
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