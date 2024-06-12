'use client'
// components/ScrollToTop.tsx
import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material'; // or any other button from your preferred UI library
import { RiArrowUpSFill } from "react-icons/ri";

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', bottom: '4rem', right: '2rem', zIndex: 1000 }}>
            {isVisible && (
                <div className='h-12 w-12 rounded-lg bg-green-900 flex items-center justify-center' onClick={scrollToTop}>
                    <RiArrowUpSFill className='text-2xl text-white' />
                </div>
            )}
        </div>
    );
};

export default ScrollToTop;
