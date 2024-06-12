'use client'
// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import styles from './navbar.module.css';
import { links } from '@/constants/data';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <nav className={styles.navbar}>
            {/* Sidebar */}
            <div className={styles.sidebar}>
                <button className={styles.sidebarToggle} onClick={toggleSidebar}>
                    ☰
                </button>
                <ul className={`${styles.navLinks} ${showSidebar ? styles.show : ''}`}>
                    {
                        links.map((link) => (
                            <li key={link.id}>
                                <Link href={link.link} className='text-sm'>
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>

            {/* Navbar (visible on larger screens) */}
            <div className="flex gap-4 items-center">
                <Image className='w-auto h-auto' src={'/logon.png'} alt='logo' width={80} height={80} />
                <ul className={styles.navLinks}>
                    {
                        links.map((link) => (
                            <li key={link.id} className='pr-4'>
                                <Link href={link.link} className='hover:text-slate-300 text-sm'>
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
