"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '@/app/components/layouts/dashboard/styles/SidebarButton.module.css';

type SidebarButtonProps = {
    onMake: () => void;
};

const SidebarButton: React.FC<SidebarButtonProps>  = ({ onMake }) => {
    
    const [isNewButtonFocused,setIsNewButtonFocused] = useState<boolean>(false);

    return (
        <div>
            <button
                // onClick={onMake}
                onFocus={() => {
                    setIsNewButtonFocused(true);
                    onMake();
                }}
                onBlur={() => {
                    setIsNewButtonFocused(false)
                    onMake();
                }}
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
        
    );
};

export default SidebarButton;