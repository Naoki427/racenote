import React from 'react';
import styles from '@/app/components/layouts/header/header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.headerline}>
        <div className={styles.logo}>
            <Image 
                src="/images/logo.PNG"
                alt="NO IMAGE"
                width={35}
                height={35}
            />
            <Image
                src="/images/racenote.png"
                alt="NO IMAGE"
                width={80}
                height={30}
            />
        </div>
    </div>
  )
}

export default Header