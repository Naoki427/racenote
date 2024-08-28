"use client"
import { NextPage } from 'next';
import React, { useState } from 'react';
import styles from '@/app/dashboard/styles/page.module.css'
import SidebarButton from '../components/layouts/dashboard/SidebarBottun';
import MakeNew from '../components/layouts/dashboard/MakeNew';

const Dashboard: NextPage = () => {
    const [isClicked,setIsClicked] = useState(false);

    const handleIsClicked = () => {
        setIsClicked(!isClicked)
    };

    return (
        <main className={styles.dashboardMain}>
            <div className={styles.dashboardSidebar}>
                < SidebarButton onMake={handleIsClicked}></SidebarButton>
            </div>
            <div className={styles.dashboardFrame}>
            </div>
            <MakeNew isVisible = {isClicked}></MakeNew>
        </main>
    );
};

export default Dashboard;