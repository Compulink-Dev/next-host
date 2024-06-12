import React from 'react'
import Navbar from './navbar'

import ScrollToTop from './scrollToTop'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
            <ScrollToTop />
        </div>
    )
}

export default MainLayout