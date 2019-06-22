import styled from 'styled-components';
import * as v from './vars'

 export const Card=styled.section`
   box-sizing:border-box;

   box-shadow:2px 2px 2px black;
   border: 2px solid ${props=>props.theme.pBorderColor};

   border-radius:10px;

   margin:.5rem auto;

   display:flex;
   justify-content:space-between;

   text-align:left;

   :hover{
      border:2px black inset;
      box-shadow:2px 2px 2px inset black;
   }
 `

 export const ButtonSection=styled.section`
   width:50%;
   padding:1rem;
   display:flex;
   flex-direction:column;
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
   ${v.FONT_STACK}
   border-bottom:1px black solid;
   padding:.5rem;
 `

 export const Description=styled.section`
   span{
      font-weight:bold;
      text-align:left;
   }
 `