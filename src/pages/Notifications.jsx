import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from './sidenav';

function Notifications() {
    return(
        <section className='flex h-screen overflow-y-hidden'>
            <div className='w-64 bg-white shadow pt-20'>
                <SideNav />
            </div>

            <div className='ml-1 pt-20'>
                <h1>Notifications Page under Construction</h1>
            </div>
        </section>        
    )
}

export default Notifications;