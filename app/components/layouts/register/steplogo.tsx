import React from 'react';
import styles from '@/app/components/layouts/register/styles/register.module.css'

interface StepCircleProps {
    innerColor: string;
    lineColor: string;
    number: string;
    step: string;
}

const StepCircle : React.FC<StepCircleProps> = ({innerColor,lineColor,number,step}) => {
    const circlestyle = {
        width: '90px',
        height: '90px',
        borderRadius: '45px',
        backgroundColor: innerColor,
        border: `2px solid ${lineColor}`
      };
      const numberstyle = {
        color: lineColor
      };
      const stepstyle = {
        color: lineColor
      };
    return (
        <div style={circlestyle} className={styles.stepframe}>
            <div style={numberstyle} className={styles.stepnumber}>
                {number}
            </div>
            <div style={stepstyle} className={styles.step}>
                {step}
            </div>
        </div>
    );
};

export default StepCircle;