import styled from 'styled-components';
import * as v from './vars'

export const Card=styled.section`
  box-sizing:border-box;
  box-shadow:2px 2px 2px black;
  border: 2px solid ${props=>props.theme.pBorderColor};
  border-radius:10px;

  margin:.5rem auto;

  display:flex;
  flex-direction:column;
  text-align:left;

  :hover{
    border:2px black inset;
    box-shadow:2px 2px 2px inset black;
  }

  width:100%;
  background-color:${props=>props.theme.pBgColor};
  ${v.TABLET}{
    max-width:350px;
    margin:.25rem .25rem;
  }
  ${v.DESKTOP}{
    width:500px;
  }
`

 export const ButtonSection=styled.section`
   width:100%;
   height:3rem;
   display:flex;
   justify-content:space-between;
   select{
      margin:.5rem;
   }
 `

 export const TypeDisp=styled.section`
   ${v.FONT_STACK}
   span{
      font-weight:bold;
      display:inline-block;
      margin-left:2rem;
   }
 `

 export const TicketDesc=styled.section`
   ${v.FONT_STACK};
   border-bottom:1px black solid;
   padding:.5rem;
 `

 export const Description=styled.section`
   margin:.5rem 0;
   span{
      font-weight:bold;
      text-align:left;
      display:inline-block;
      padding:.5rem;
      color:${props=>props.theme.infoAccent};
      background-color:${props=>props.theme.alertBgAccent};
   }
 `