import styled from 'styled-components';
import * as v from '../styles/vars'

export const Wrapper=styled.div`
    background-color:${props=>props.theme.pBgColor};
    ${v.TABLET}{
        display:flex;
    }
`

export const SingleWrapper=styled.div`
    ${v.TABLET}{
        display:flex;
        justify-content:center;
        align-content:center;
        height:100%;
        width:calc( 100vw - 250px);
        padding-top:2rem;
    }
`