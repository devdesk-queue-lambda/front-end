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
        width: calc(100vw - 250px);
        height:100vh;
        overflow-y:auto;
        justify-content:center;
    }
    ${v.DESKTOP}{
        width:100%;
        height:100%;
        justify-content:space-evenly;
    }
`