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
        <button onClick={pushUserToTop} type="button" className={`rounded ${hideBackToTop ? "hidden" : ""} fixed bg-slate-900 hover:bg-slate-800 hover:scale-105 duration-300 text-white p-5 bottom-10 right-5`}>Back to top</button>
    )
}

export default BackToTop