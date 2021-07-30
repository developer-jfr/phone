import React from 'react'
import { QrCode } from '../../common/QrCode'
import {
FinalScreenCode, 
FinalScreenConatiner,
FinalScreenContent,
FinalScreenWrapp,
FinalScreenresponse,
ResponseH1, 
ResponseSPAN,


} from './FinalScreenElements'
function FinalScreen() {
    return (
        <FinalScreenWrapp>
            <FinalScreenConatiner>
                <FinalScreenContent>
                    <FinalScreenresponse>
                        <ResponseH1>ЗАЯВКА ПРИНЯТА</ResponseH1>
                        <ResponseSPAN>Держите телефон под рукой.  Скоро с Вами свяжется наш менеджер. </ResponseSPAN>
                    </FinalScreenresponse>
                     <FinalScreenCode>
                        <QrCode />
                     </FinalScreenCode>
                </FinalScreenContent>
            </FinalScreenConatiner>
        </FinalScreenWrapp>
    )
}

export default FinalScreen
