import styled from 'styled-components';


export const KeyboardConatiner = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
@media screen and (max-width: 500px) {
  width: 100%;
}
  
`

export const KeyboardWrapp = styled.div`
width: 400px;
@media screen and (max-width: 500px) {
  width: 100px;
}
  
`

export const KeyBoardRow = styled.div`
display: flex;
  width: 100%;
  padding: 5px 5px 5px 5px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`
export const KeyboardSPAN = styled.span`
color: #000;
padding: 20px;
font-size: 15px;
`;
export const KeyboardSpanWrapp = styled.div`
padding: 15px;
`