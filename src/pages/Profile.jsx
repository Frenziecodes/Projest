import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from './sidenav';

function Profile() {
    return(
        <section className='flex h-screen overflow-y-hidden'>
            <SideNav /> 
            <div className='ml-1 pt-20'>
                <h1>Profile Page under Construction</h1>
            </div>
        </section>        
    )
}

export default Profile;