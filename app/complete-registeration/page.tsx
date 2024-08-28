import { NextPage } from 'next';
import React from 'react';
import '@/styles/global.css'
import styles from '@/app/complete-registeration/styles/CompleteRegistration.module.css'
import StepCircle from '../components/layouts/register/steplogo';
import InputUserInfo from '@/app/components/layouts/register/inputuserinfo'
const CompleteRegiteration: NextPage = () => {
    return (
        <main className={styles.completeMain}>
            <div className={styles.completeFrame}>
            <div className={styles.CregisterTitle}>
                新規アカウント登録
            </div>
            <div className={styles.Cstepcontainer}>
              <StepCircle innerColor = "white" lineColor = "#D9D9D9" number='1' step='認証'/>
              <div className={styles.Ctriangleright}></div>
              <StepCircle innerColor = "#1F6764" lineColor = "white" number='2' step='情報入力'/>
            </div>
                <InputUserInfo></InputUserInfo>
            </div>
        </main>
    );
};

export default CompleteRegiteration;