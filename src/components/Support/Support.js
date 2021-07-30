import React from "react";
import { CheckBox } from "@material-ui/core";
import {
  SupportCode,
  SupportContainer,
  SupportNumber,
  SupportWrapp,
  SupportButton,
  SupportCheck,
  SupportDesc,
  SupportTitle,
  CheckInput,
  CheckText,
  KeyboardInput,
  SupportTitleCode,
  SupportCodeQr,
} from "./SupportElements";
import { TextField, Button } from "@material-ui/core";
import code from "./../../images/code.svg";

import { WelcomeKeyboard } from "../Welcome/Keyboard/WelcomeKeyboard";
function Support() {
  return (
    <SupportContainer>
      <SupportWrapp>
        <SupportNumber>
          <SupportTitle>Введите ваш номер мобильного телефона</SupportTitle>

          <KeyboardInput>
            <WelcomeKeyboard />
          </KeyboardInput>
        </SupportNumber>
        <SupportCode>
          <SupportTitleCode>
            Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
          </SupportTitleCode>
          <SupportCodeQr src={code} />
        </SupportCode>
      </SupportWrapp>
    </SupportContainer>
  );
}

export default Support;
