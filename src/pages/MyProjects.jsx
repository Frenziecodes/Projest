import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from './sidenav';

function MyProjects() {
    return(
        <section className='flex h-screen overflow-y-hidden'>
            <SideNav />

            <div className='ml-1 pt-20 md:ml-60 md:pl-1 Context'>
                <h1>My Projects Page under Construction</h1>
            </div>
        </section>        
    )
}

export default MyProjects;