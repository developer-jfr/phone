import styled from 'styled-components';
import back  from './../../images/home.png'
export const FinalScreenWrapp = styled.div`
background: url(${back});
height: 650px;
background-repeat: no-repeat;

width: 100%;

` 

export const FinalScreenConatiner = styled.div`

`;

export const FinalScreenContent = styled.div`
display: grid;
grid-template-columns: 1fr 2fr ;
grid-template-rows: repeat(2, 200px);
@media screen and (max-width: 500px) {
    grid-template-columns: 2fr;
    grid-template-rows: repeat(1, 10px);
}
`

export const FinalScreenresponse = styled.div`
backdrop-filter: blur(30px);
height: 650px;
padding: 10px 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const FinalScreenCode = styled.div`

`

export const ResponseH1 = styled.h1`

`

export const ResponseSPAN = styled.span`


`