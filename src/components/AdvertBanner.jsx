import React, { useState } from 'react';
import NameCheapPromo from '../images/NameCheap.png'; // change the advert to this image
const trackingLink = 'https://namecheap.pxf.io/c/4427884/1130495/5618';

function AdvertBanner() {
  const [isBannerVisible, setBannerVisible] = useState(true);

  const handleDismissBanner = () => {
    setBannerVisible(false);
  };

  if (!isBannerVisible) {
    return null;
  }

  return (
    <div className="alert alert-dismissible fade show justify-between rounded-sm mb-1 bg-blue-900 text-center text-white md:flex md:text-left">
      <div className="relative w-full">
        <a href={trackingLink}>
          <img src={NameCheapPromo} alt="Advertise with us" className="w-full  h-12 md:h-20" />
        </a>
        <a href="#" className="absolute top-0 right-0 text-white" onClick={handleDismissBanner} aria-label="Close">
          <span className="[&>svg]:h-4 [&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default AdvertBanner;
