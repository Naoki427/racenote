import { NextPage } from 'next';
import React from 'react';
import Image from "next/image";
import styles from '@/app/register/styles/page.module.css'
import '@/styles/global.css'
import StepCircle  from '../components/layouts/register/steplogo';
import EmailInput from '../components/layouts/register/emailinput';

const Register: NextPage = () => {
  return (
    <main className={styles.registerMain}>
        <div className={styles.registerFrame}>
            <div className={styles.registerTitle}>
                新規アカウント登録
            </div>
            <div className={styles.stepcontainer}>
              <StepCircle innerColor = "#1F6764" lineColor = "white" number='1' step='認証'/>
              <div className={styles.triangleright}></div>
              <StepCircle innerColor = "white" lineColor = "#D9D9D9" number='2' step='情報入力'/>
            </div>
            <EmailInput/>
            <div className={styles.divline}></div>
            <div className={styles.optionText}>外部アカウントで登録</div>
            <div className={styles.optionContainer}>
              <Image src="/images/google.png" alt="" width={45} height={45}></Image>
              <Image src="/images/apple.png" alt="" width={45} height={45}></Image>
              <Image src="/images/x.png" alt="" width={45} height={45}></Image>
            </div>
        </div>
    </main>
  );
};

export default Register;