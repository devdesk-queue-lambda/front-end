import styled from 'styled-components';
import * as v from './vars'

const Button=styled.button`
    border:2px transparent solid;
    
    box-sizing:border-box;
    margin:.25rem;

    ${v.FONT_STACK};
    padding:.25rem;
    :hover{
      box-shadow:2px 2px 2px black inset;
      border:2px black inset;
      opacity:1;
    }
`

export const SuccessButton=styled(Button)`
    color:${props=>props.theme.accent};
    background-color:${props=>props.theme.bgAccent};
    transition:background-color linear .5s,color linear .5s;
    cursor:pointer;
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

    ${v.DESKTOP} {
      padding: 10px 14px;
    }
`

export const Sel=styled.section`
  ${v.FONT_STACK};
  display:flex;
  align-items:center;
  position:relative;
  select{
    box-sizing:border-box;
    ${v.FONT_STACK};
    border:1px solid black;
    margin-right:0;
    padding:.5rem;
    padding-right:1rem;
  }
  svg{
    box-sizing:border-box;
    position:absolute;
    right:0;
  }
`