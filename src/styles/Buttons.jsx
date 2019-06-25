import styled from 'styled-components';
import * as v from './vars'

const Button=styled.button`
    border:2px transparent solid;
    
    box-sizing:border-box;
    margin:.5rem;

    ${v.FONT_STACK};
    padding:.5rem;
    
    :hover{
        border:2px black inset;
        box-shadow:2px 2px 2px inset black;
    }
`

export const SuccessButton=styled(Button)`
    color:${props=>props.theme.accent};
    background-color:${props=>props.theme.bgAccent};
`

export const KillButton=styled(Button)`
    color:${props=>props.theme.errAccent};
    background-color:${props=>props.theme.errBgAccent};
`
export const InfoButton=styled(Button)`
    color:${props=>props.theme.infoAccent};
    background-color:${props=>props.theme.infoBgAccent};
`