import React from "react";
import { Button } from "@material-ui/core";
import {
  SupportCode,
  SupportTitleCode,
  SupportCodeQr,
} from "./../components/Support/SupportElements";
import code from './../images/code.svg'
export const QrCode = () => {
  return (
    <SupportCode>
      <SupportTitleCode>
        Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
      </SupportTitleCode>
      <SupportCodeQr src={code} />
    </SupportCode>
  );
};
