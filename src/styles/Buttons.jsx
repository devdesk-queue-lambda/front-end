import styled from 'styled-components';
import * as v from './vars'

const Button=styled.button`
    border:2px transparent solid;
    
    box-sizing:border-box;
    margin:.25rem;

    ${v.FONT_STACK};
    padding:.25rem;
`

export const SuccessButton=styled(Button)`
    color:${props=>props.theme.accent};
    background-color:${props=>props.theme.bgAccent};
    transition:background-color linear .5s,color linear .5s;
    cursor:pointer;
    :hover{
      background-color:${props=>props.theme.accent};
      color:${props=>props.theme.bgAccent};
      border-color:${props=>props.theme.bgAccent};
    }
`

export const KillButton=styled(Button)`
    color:${props=>props.theme.errAccent};
    background-color:${props=>props.theme.errBgAccent};
    padding: 8px 4px;
    font-weight: bold;
    font-size: 0.75rem;
    opacity: 0.65;
    cursor: pointer;
    transition: all 0.25s linear;
    background: ${props=>props.theme.errBgAccent};
    border-color: ${props=>props.theme.errBgAccent};
    color: ${props=>props.theme.errAccent};

    &:hover {
      background: transparent;
      border: solid 2px ${props=>props.theme.errBgAccent};
      color: ${props=>props.theme.errBgAccent};
    }

    ${v.DESKTOP} {
      padding: 8px 10px;
    }
`
export const InfoButton=styled(Button)`
    color:${props=>props.theme.infoAccent};
    background-color:${props=>props.theme.infoBgAccent};
    width: auto;
    padding: 10px 4px;
    background: #007bff;
    font-weight: bold;
    font-size: 0.75rem;
    color: #fff;
    border: none;
    opacity: 0.65;
    cursor: pointer;
    transition: all 0.25s linear;

    &:hover {
      opacity: 1;
    }

    ${v.DESKTOP} {
      padding: 10px 14px;
    }
`