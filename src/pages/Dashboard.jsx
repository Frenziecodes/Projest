import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from './sidenav';

function Dashboard() {
    return(
        <section className='flex h-screen overflow-y-hidden'>
            <SideNav />

            <div className='pl-14 w-full pt-20'>
                <h1>Dashboard Page under Construction</h1>
            </div>
        </section>        
    )
}

export default Dashboard;