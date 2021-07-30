import styled from "styled-components";
import {Link} from 'react-router-dom'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;


:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg,
   rgba(0, 0, 0, 0.2) 0%,
   rgba(0 ,0, 0, 0.6) 100%),
  linear-gradient(180deg, rgba(0,0,0, 0.2) 0% , transparent 100%);
  z-index: 2;

}

`

export const HeroBg  = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;

`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
backdrop-filter: blur(30px);
height: 300px;
display: flex;
flex-direction: column;
top: 310px ;
left: 950px;
border-radius: 10px


`




export const ContentText = styled.h6`
padding: 30px 20px;
`
export const CodeCheck = styled.img`
widht: 100px;
height: 100px;
`
export const DesciptionTitle = styled.span`
padding: 20px 20px;
`;



export const HeroBtnWrapper = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;

`
export const ButtonHero = styled(Link)`
background: rgb(3, 233, 183);
border: none;
border-radius: 10px;
padding: 10px 20px;
text-decoration: none;
color: white;
`