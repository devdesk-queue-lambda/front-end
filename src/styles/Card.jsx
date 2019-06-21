import styled from 'styled-components';
import * as v from './vars'

 export const Card=styled.section`
    box-sizing:border-box;

    box-shadow:2px 2px 2px black;
    border: 1px solid ${props=>props.theme.pBorderColor};

    display:flex;
    flex-direction:column;

    :hover{
        border:2px black inset;
        box-shadow:2px 2px 2px inset black;
    }
 `

 export const ButtonSection=styled.section`
    display:flex;
    flex-direction:column;
 `