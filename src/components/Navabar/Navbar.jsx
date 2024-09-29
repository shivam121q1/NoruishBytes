import React from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { NavbarLinks } from '../../data/nav-links'
import { AlignJustify } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    // Function to check if the current path matches the route
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    return (
        <div className='flex h-14 items-center justify-center border-b-[1px] border-b-amber-700'>
            <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
                {/* Logo */}
                <Link to="/">
                    NourishBytes
                </Link>
                {/* Navigation Links */}
                <nav className='hidden md:block'>
                    <ul className='flex gap-x-6 text-black'>
                        {NavbarLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link?.path}
                                    className={`relative pb-1 ${matchRoute(link.path) ? 'border-b-2 border-amber-700' : 'hover:border-b-2 hover:border-amber-700'}`}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='w-20 '>
                <AlignJustify className='block md:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
