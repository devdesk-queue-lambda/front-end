import styled from 'styled-components';
import * as v from './vars'

export const Card=styled.section`
  border: 1px solid ${props=>props.theme.pBorderColor};
  border: 1px solid white;
  border-radius:6px;
  z-index:0;

  margin:.25rem auto;
  padding: 10px;
  position:relative;

  :hover{
    border: 1px solid #ccc;
    background: rgba(255,255,255,.5);
  }

  width:100%;
  min-width: 300px;
  height: 360px;
  background-color:${props=>props.theme.pBgColor};
  background: rgba(255,255,255,1);
  ${v.TABLET}{
    max-width: calc(50% - 0.625rem);
    margin:.25rem .25rem;
  }
  ${v.DESKTOP}{
    width: calc(50% - 0.625rem);
  }
  ${v.XLDESKTOP} {
    width: calc(33% - 0.625rem);
  }
`

 export const ButtonSection=styled.section`
   width:100%;
   display:flex;
   justify-content:space-evenly;
   flex-wrap: nowrap;
   position: relative;
   bottom:0;
   select{
      margin:.5rem;
   }
 `

 export const TypeDisp=styled.section`
  width: 100%;
   ${v.FONT_STACK};
   line-height: 1.5em;
   span{
      margin-right: 30px;
      font-weight:bold;
      display:inline-block;
      margin-left:2rem;
   }
   ${v.TABLET} {
     br { display: none; }
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
   }
 `

 export const TicketDesc=styled.section`
   ${v.FONT_STACK};
   border-bottom:1px black solid;
   margin-bottom: 6px;
   padding-bottom: 10px;
   height:85%;
 `

 export const Description=styled.section`
   margin:.5rem 0;
   overflow: hidden;
   text-overflow: ellipsis;
   height: 65%;
   max-width:100%;
   word-wrap:break-word;
   span{
      font-weight:bold;
      text-align:left;
      display:inline-block;
<<<<<<< HEAD
      margin-top:1rem;
      padding:.5rem;
      color:${props=>props.theme.infoAccent};
      background-color:${props=>props.theme.alertBgAccent};
=======
      padding: 0.5rem 0;
      color:${props=>props.theme.alertBgAccent};
   }
   ${v.DESKTOP} {
    height: 75%;
>>>>>>> df1600fb8d9652e1a6c3b35c2a4966b0d4dc34e9
   }
 `