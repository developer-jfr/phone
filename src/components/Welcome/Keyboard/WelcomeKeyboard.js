import React, { useState, useEffect } from "react";

import { Button } from "./Button";
import { Button as MUButton, Checkbox } from "@material-ui/core";
import { ClearButton } from "./ClearButton";
import MaskInput from "react-maskinput";
import { Link } from "react-router-dom";
import { checkNumber } from "../../../api/api";
import { ButtonST } from "../../../common/Button/ButtonElemts";
import {
  SupportCheck,
  
  CheckText,
} from "../../Support/SupportElements";
import './../../../App.css'
import {
  KeyBoardRow,
  KeyboardConatiner,
  KeyboardWrapp,
  KeyboardSPAN,
  KeyboardSpanWrapp
} from './KeyboardElemts'
export const WelcomeKeyboard = () => {
  const [error, setError] = useState([]);
  const [allow, setAllow] = useState(false);
  const [value, setValue] = useState('7')


//Async request to server
  useEffect(async () => {
    if (value.length === 11) {
      let res = await checkNumber(value);
    setError(res);
    }
  }, [value.length]);

  //Adding value 
  const addToInput = (val) => {
    setValue(value + val );
  };
 //Function to keyboard bacspace
  const backSpace = () => {
    if (value.length !== 1) {
      setValue(value.substring(0, value.length - 1) );
    }
  };


//For changing allow 
  const onClicked = () => {
    setAllow(true);
  };

  return (
    <KeyboardConatiner   style={{ display: "flex", flexDirection: "column" }}>
    {!error.valid & error.valid !== undefined && (
      <div class="alert alert-danger" role="alert">
      A simple danger alert—check it out!
    </div>
    )}
      <KeyboardWrapp>
        <MaskInput
          alwaysShowMask
          maskChar="_"
          mask="+0(000)-000-00-00"
          size={20}
          value={value}
          className={`maskInput`}
          
        />
        <KeyboardSpanWrapp>
        <KeyboardSPAN>и с Вами свяжется наш менеждер для дальнейшей консультации</KeyboardSPAN>
        </KeyboardSpanWrapp>
        <KeyBoardRow>
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
        </KeyBoardRow>
        <KeyBoardRow>
          
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
         
        </KeyBoardRow>
        <KeyBoardRow>
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
        </KeyBoardRow>
        <KeyBoardRow>
          <Button handleClick={addToInput}>0</Button>
          <ClearButton handleClear={() => setValue("7")}>
            clear
          </ClearButton>

          <ButtonST onClick={backSpace}>C</ButtonST>
        </KeyBoardRow>
      </KeyboardWrapp>
      <SupportCheck>
        <Checkbox name="check" value={allow} onClick={onClicked} required />
        <CheckText>Согласие на обработкуперсональных данных</CheckText>
      </SupportCheck>

      <MUButton variant="outlined" color="primary">
        <Link to={`${error.valid & allow ? "/final" : "/support"}`}>OK</Link>
      </MUButton>
    </KeyboardConatiner>
  );
};
