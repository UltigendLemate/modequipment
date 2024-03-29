'use client'
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const navLinks = [
    {
        title: "About Us",
        link: "/about",
        subMenu: null
    },
    {
        title: "Our Equipment",
        link: "/our-equipment",
        subMenu: [
            {
                title: "Hot Equipment",
                link: "/our-equipment#hot"
            },
            {
                title: "Cold Equipment",
                link: "/our-equipment#cold"
            },
            {
                title: "Trolleys",
                link: "/our-equipment#trolleys"
            }
        ]
    },
    {
        title: "Imported Equipment",
        link: "/imported-equipment",
        subMenu: null
    },
    {
        title: "Designing",
        link: "#",
        subMenu: [
            {
                title: "Kitchen Layout Solutions",
                link: "/kitchen-layout"
            },
            {
                title: "LPG Pipeline",
                link: "/lpg-pipeline"
            },
            {
                title: "Exhaust System Ducting",
                link: "/exhaust-system"
            },
            {
                title: "Fresh Air Supply System",
                link: "/fresh-air-supply"
            },
            {
                title: "AMC",
                link: "/amc"
            }

        ]
    },
    {
        title: "Our Clients",
        link: "/our-clients",
        subMenu: null
    },
    {
        title: "Contact Us",
        link: "/contact-us",
        subMenu: null

    }

]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState<number | null>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSubMenuOpen(null); // Close any open submenu when toggling the menu
        }
    };

    const toggleSubMenu = (index: number) => {
        if (subMenuOpen === index) {
            setSubMenuOpen(null);
        } else {
            setSubMenuOpen(index);
        }
    };

    const handleMobileOptionClick = (index: number) => {
        toggleSubMenu(index);
    };

    return (
        <>
            <nav className="bg-background  font-mont text-foreground py-4">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex-shrink-0">
                            <a href="#" className="text-xl font-bold">
                                <Image src="/modlogo.jpg" alt='logo' width={100} height={50} />
                            </a>
                        </div>
                        <div className="hidden md:block">
                        <ul className="flex space-x-4">
  {navLinks.map((link, index) => (
    <li key={index} className={'group/link relative  ease-in-out transition-all duration-1000 '} 
        
        // Assuming -1 is a value that closes the submenu
      >
        <Link href={link.link} className='flex items-center gap-1'>
          {link.title}  
          {link.subMenu && <ChevronDown size={15} className='mt-1' />}
        </Link>

        {link.subMenu &&  (
          <ul className="absolute group-hover/link:grid left-0  bg-popover text-muted-foreground p-2 hidden gap-2">
            {link.subMenu?.map((subLink, subIndex) => (
              <li key={subIndex} className=''>
                <Link href={subLink.link} className='whitespace-nowrap hover:underline underline-offset-4 w-full'>
                  {subLink.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
  
      </li>
   ))}
</ul>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                            {/* Mobile menu */}
                            {isOpen && (
                                <div className="bg-gray-800 absolute top-10 right-0 p-2 mt-2">
                                    <ul>

                                        {navLinks.map((link, index) => (
                                            <li key={index} className="relative">
                                                <a href="#" onClick={() => handleMobileOptionClick(index)} className="flex items-center justify-between">
                                                    {link.title}
                                                    {link.subMenu && <ChevronRight size={15} className="mt-1" />}
                                                </a>
                                                {link.subMenu && subMenuOpen === index && (
                                                    <ul className="bg-gray-700 p-2">
                                                        {link.subMenu.map((subLink, subIndex) => (
                                                            <li key={subIndex}>
                                                                <a href="#">{subLink.title}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))
                                        }

                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;