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
`

export const KillButton=styled(Button)`
    color:${props=>props.theme.errAccent};
    background-color:${props=>props.theme.errBgAccent};
    padding: 8px 4px;
    background: transparent;
    font-weight: bold;
    font-size: 0.75rem;
    color: #55596d;
    border: solid 2px #55596d;
    opacity: 0.65;
    cursor: pointer;
    transition: all 0.25s linear;

    &:hover {
      background: #bb1333;
      color: #fff;
      border-color: #bb1333;
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