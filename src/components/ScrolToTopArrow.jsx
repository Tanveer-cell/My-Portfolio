import React, { useState, useEffect } from 'react';

const ScrollToTopArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        console.log("Scrolled")
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
            console.log("Window scrolled")
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        const scrollListener = () => {
            handleScroll();
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-6 right-36 z-50 transition-opacity duration-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 z-50 text-white rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
                title="Go to top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ScrollToTopArrow;