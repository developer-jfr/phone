import styled from 'styled-components';
import back from './../../images/home.png';
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const SupportContainer = styled.div`
background: url(${back});
height: 650px;
background-repeat: no-repeat;

width: 100%;
@media screen and (max-width: 500px) {
    width: 100%;
}
`

export const SupportWrapp = styled.div`
display: grid;
grid-template-columns: 1fr 2fr ;
grid-template-rows: repeat(2, 200px);
@media screen and (max-width: 500px) {
    grid-template-columns: 2fr;
    grid-template-rows: repeat(1, 200px);
}
`;

export const SupportNumber = styled.div`
backdrop-filter: blur(30px);
height: 650px;

@media screen and (max-width: 500px) {
    height: 750px
}

`;


export const SupportTitle = styled.h2`
color: black;
padding: 20px 30px ;
`;

export const KeyboardNumber = styled.h3`
color: black;
weight: bold;
`;

export const SupportDesc = styled.span`

color: black;
`;

export const KeyboardInput = styled.h5`
color: red;
`

export const SupportCheck = styled.div`
display: flex;

justify-content: space-between;
`

export const CheckInput = styled.input.attrs({ type: 'checkbox' })`

`;

export const CheckText = styled.span`
 color: black;
 padding-top: 10px;
 font-size: 15px;
`
export const SupportButton = styled(Link)`
 text-decoration: none;
 background: blue;
 border-radious: 10px;


`

export const SupportCode = styled.div`
backdrop-filter: blur(30px);
display: flex;

position: relative;
top: 390px;
left: 600px;
height: 20s0px;
width: 300px;
align-items:center;
justify-content: center;
@media screen and (max-width: 500px) {
    position: relative;
    top: 700px;
    left: 0px;
    
}
`;

export const SupportCodeQr = styled.img`
widht: 100px;
height: 100px;
`;
export const SupportTitleCode = styled.h6`
color: #fff;
width: 100px;
font-size: 12px;

@media screen and (max-width: 500px) {
    color: #000;
    
}
`;
