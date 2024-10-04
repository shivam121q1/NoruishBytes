import React, { useState, useEffect, useRef } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { NavbarLinks } from '../../data/nav-links';
import { AlignJustify, X } from 'lucide-react'; // Importing X (close) icon

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state
    const menuRef = useRef(null); // Ref to detect outside clicks

    // Function to check if the current path matches the route
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close the menu if clicked outside
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    // Add event listener for click outside
    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className='flex h-14 items-center justify-center border-b-[1px] border-b-amber-700'>
            <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
                {/* Logo */}
                <Link to="/">
                    NourishBytes
                </Link>

                {/* Desktop Navigation Links */}
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

                {/* Menu Icon for mobile & medium screens */}
                <div className='block md:hidden'>
                    <AlignJustify className='cursor-pointer' onClick={toggleMenu} />
                </div>
            </div>

            {/* Mobile Navigation Menu with Right Slide-In and Close Icon */}
            <nav
                ref={menuRef}
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
            >
                <div className='flex justify-end p-4'>
                    {/* Cross Icon to close the menu */}
                    <X className='cursor-pointer' onClick={() => setIsMenuOpen(false)} />
                </div>
                <ul className='flex flex-col items-center gap-y-6 p-4 text-black'>
                    {NavbarLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link?.path}
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                className={`relative pb-1 ${matchRoute(link.path) ? 'border-b-2 border-amber-700' : 'hover:border-b-2 hover:border-amber-700'}`}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
