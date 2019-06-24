import styled from 'styled-components';

export const Navigate=styled.nav`
    span.menuHeader{
        display:inline-block;
        padding:1rem;
        margin:.5rem;
        border:2px groove ${props=>props.theme.accBorderColor};
    }
    .menu{
        transform:translate(-101%);
        transition:transform .5s;
        position:absolute;
        left:0;
        background-color: ${props=>props.theme.bgAccent}
        
        section{
            padding:1rem;
            border:white 1px groove;
            margin: .25rem 0;
        }
    }
    .show{
        transform:translate(0%);
    }
`