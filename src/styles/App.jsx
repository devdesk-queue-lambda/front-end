import styled from 'styled-components';
import * as v from '../styles/vars'

export const Wrapper=styled.div`
    background-color:${props=>props.theme.pBgColor};
    ${v.TABLET}{
        display:flex;
    }
`