import styled from 'styled-components';
import * as v from './vars'

export const SuccessButton=styled.button`
    border:2px transparent;
    
    ${v.FONT_STACK}

    color:${props=>props.theme.accent};
    background-color:${props=>props.theme.bgAccent};
    
    :hover{
        border:2px black inset;
        box-shadow:2px 2px 2px inset black;
    }
`

export const KillButton=styled.button`
    border:2px transparent;
    
    ${v.FONT_STACK}

    color:${props=>props.theme.errAccent};
    background-color:${props=>props.theme.errBgAccent};
    
    :hover{
        border:2px black inset;
        box-shadow:2px 2px 2px inset black;
    }
`
export const InfoButton=styled.button`
    border:2px transparent;
    
    ${v.FONT_STACK}

    color:${props=>props.theme.infoAccent};
    background-color:${props=>props.theme.infoBgAccent};
    
    :hover{
        border:2px black inset;
        box-shadow:2px 2px 2px inset black;
    }
`