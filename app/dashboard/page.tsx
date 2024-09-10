"use client"
import { NextPage } from 'next';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import styles from '@/app/dashboard/styles/page.module.css'

const Dashboard: NextPage = () => {
    const [isNewButtonFocused,setIsNewButtonFocused] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputWindowRef = useRef<HTMLDivElement>(null);

    const handleBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
        // フォーカスがウィンドウ内に移動しているかを確認
        if (
            inputWindowRef.current &&
            event.relatedTarget &&
            inputWindowRef.current.contains(event.relatedTarget as Node)
        ) {
            // フォーカスがウィンドウ内に移動した場合は、フォーカスを維持
            buttonRef.current?.focus();
        } else {
            // フォーカスがウィンドウ外に移動した場合は、ウィンドウを閉じる
            setIsNewButtonFocused(false);
        }
    };

    return (
        <main className={styles.dashboardMain}>
            <div className={styles.dashboardSidebar}>
                <button
                    ref={buttonRef}
                    onFocus={() => {setIsNewButtonFocused(true);}}
                    onBlur={handleBlur}
                    tabIndex={0}
                    className={styles.buttonContainer}
                    style={{backgroundColor: isNewButtonFocused ? '#b3b3b3' : 'transparent'}}
                >
                    <Image 
                        src={ isNewButtonFocused ? "/images/new_button_focus.png":"/images/new_button.png"}
                        alt="" width={32} height={32}>
                    </Image>
                    <text
                        style={{ color:isNewButtonFocused ? '#0E82FF' : '#121212'}}
                        className={styles.newButtonFont}
                    >新規作成</text>
                </button>
                <div className={styles.buttonContainer}
                    style={{backgroundColor: isNewButtonFocused ? 'transparent' : '#b3b3b3'}}
                >
                    <Image 
                        src={ isNewButtonFocused ? "/images/edit_button.png":"/images/edit_button_focus.png"}
                        alt="" width={32} height={32}>
                    </Image>
                    <text
                        style={{ color:isNewButtonFocused ? '#121212' : '#0E82FF'}}
                        className={styles.newButtonFont}
                    >最近使ったフ</text>
                </div>
            </div>
            <div className={styles.dashboardFrame}>
                <div style={{zIndex: '1',position: 'relative'}}>検索バーと最近編集したファイルをここに出す</div>
                {isNewButtonFocused && (<div className={styles.overlay}></div>)}
                    {isNewButtonFocused && (
                        <div
                            ref={inputWindowRef}
                            tabIndex={0}
                            className={styles.newWindow}>新規作成を行う</div>
            )}
            </div>
        </main>
    );
};

export default Dashboard;