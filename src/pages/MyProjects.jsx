import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from './sidenav';

function MyProjects() {
    return(
        <section className='flex h-screen overflow-y-hidden'>
            <div className='w-64 bg-white shadow'>
                <SideNav />
            </div>

            <div className='ml-1'>
                <h1>My Projects Page under Construction</h1>
            </div>
        </section>        
    )
}

export default MyProjects;