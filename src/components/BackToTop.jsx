import React, { useEffect, useState } from 'react';

function BackToTop(){
    const [hideBackToTop, changeHiddenState] = useState(true)
    useEffect(() => {
        const handleScrollEvent = () => {
            window.pageYOffset > 200 ? changeHiddenState(false) : changeHiddenState(true) 
        }

        window.addEventListener("scroll", handleScrollEvent);

        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        }
    })
    const pushUserToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <button onClick={pushUserToTop} type="button" className={`rounded ${hideBackToTop ? "hidden" : ""} fixed bg-blue-900 hover:bg-blue-800 hover:scale-105 duration-300 rounded-full text-white p-3 bottom-10 right-5`}>
             <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke-width="2.5"
                stroke="currentColor"
                class="h-4 w-4">
                <path
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                clip-rule="evenodd" />
            </svg>
        </button>
    )
}

export default BackToTop