import React, { useState } from "react";
import Video from "./../../images/main.mp4";
import code from './../../images/code.svg'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  ContentText,
  CodeCheck,
  DesciptionTitle,
  ButtonHero
} from "./HeroSectionElement";
import {Button} from '@material-ui/core'
function HeroSection() {

  return (
    <HeroContainer id="home">
      <HeroBg>
      
        <VideoBg autoPlay loop muted src={Video}  type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <ContentText> ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!</ContentText>
        <CodeCheck src={code} />
        <DesciptionTitle>Сканируйте QR-код или нажмите ОК</DesciptionTitle>
        <HeroBtnWrapper>
          <ButtonHero to='/support'>
           OK
          </ButtonHero>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}


export default HeroSection;
