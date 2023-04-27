import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from './sidenav';

function Dashboard() {
    return(
        <section className='flex min-h-screen overflow-y-hidden'>          

            <div className='md:ml-60 w-full Context'>
               <SideNav />
                <div className='mt-10 ml-4 min-h-full'>
                    <h1>Dashboard Page under Construction</h1>
                </div>
             
            </div>
        </section>        
    )
}

export default Dashboard;