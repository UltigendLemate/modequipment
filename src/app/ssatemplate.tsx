// 'use client'

// import React, { useState } from 'react';

// const Template = ({ children }: { children: React.ReactNode }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [subMenuOpen, setSubMenuOpen] = useState<number | null>(null);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//         if (!isOpen) {
//             setSubMenuOpen(null); // Close any open submenu when toggling the menu
//         }
//     };

//     const toggleSubMenu = (index: number) => {
//         if (subMenuOpen === index) {
//             setSubMenuOpen(null);
//         } else {
//             setSubMenuOpen(index);
//         }
//     };

//     const handleMobileOptionClick = (index: number) => {
//         toggleSubMenu(index);
//     };

//     return (
//         <>
//             <nav className="bg-gray-900 text-white py-4">
//                 <div className="max-w-7xl mx-auto px-4">
//                     <div className="flex justify-between items-center">
//                         <div className="flex-shrink-0">
//                             <a href="#" className="text-xl font-bold">Logo</a>
//                         </div>
//                         <div className="hidden md:block">
//                             <ul className="flex space-x-4">
//                                 {/* Option 1 */}
//                                 <li className="relative">
//                                     <a href="#" onMouseLeave={() => toggleSubMenu(0)}  onMouseEnter={() => toggleSubMenu(0)}>Option 1</a>
//                                     {subMenuOpen === 0 && (
//                                         <ul className="absolute left-0 mt-2 bg-gray-800 p-2">
//                                             <li><a href="#">Suboption 1</a></li>
//                                             <li><a href="#">Suboption 2</a></li>
//                                             <li><a href="#">Suboption 3</a></li>
//                                         </ul>
//                                     )}
//                                 </li>
//                                 {/* Option 2 */}
//                                 <li className="relative">
//                                     <a href="#" onMouseEnter={() => toggleSubMenu(1)}>Option 2</a>
//                                     {subMenuOpen === 1 && (
//                                         <ul className="absolute left-0 mt-2 bg-gray-800 p-2">
//                                             <li><a href="#">Suboption 1</a></li>
//                                             <li><a href="#">Suboption 2</a></li>
//                                             <li><a href="#">Suboption 3</a></li>
//                                         </ul>
//                                     )}
//                                 </li>
//                                 {/* Option 3 */}
//                                 <li className="relative">
//                                     <a href="#" onMouseEnter={() => toggleSubMenu(2)}>Option 3</a>
//                                     {subMenuOpen === 2 && (
//                                         <ul className="absolute left-0 mt-2 bg-gray-800 p-2">
//                                             <li><a href="#">Suboption 1</a></li>
//                                             <li><a href="#">Suboption 2</a></li>
//                                             <li><a href="#">Suboption 3</a></li>
//                                         </ul>
//                                     )}
//                                 </li>
//                                 {/* Option 4 */}
//                                 <li className="relative">
//                                     <a href="#" onMouseEnter={() => toggleSubMenu(3)}>Option 4</a>
//                                     {subMenuOpen === 3 && (
//                                         <ul className="absolute left-0 mt-2 bg-gray-800 p-2">
//                                             <li><a href="#">Suboption 1</a></li>
//                                             <li><a href="#">Suboption 2</a></li>
//                                             <li><a href="#">Suboption 3</a></li>
//                                         </ul>
//                                     )}
//                                 </li>
//                                 {/* Option 5 */}
//                                 <li className="relative">
//                                     <a href="#" onMouseEnter={() => toggleSubMenu(4)}>Option 5</a>
//                                     {subMenuOpen === 4 && (
//                                         <ul className="absolute left-0 mt-2 bg-gray-800 p-2">
//                                             <li><a href="#">Suboption 1</a></li>
//                                             <li><a href="#">Suboption 2</a></li>
//                                             <li><a href="#">Suboption 3</a></li>
//                                         </ul>
//                                     )}
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="md:hidden">
//                             <button onClick={toggleMenu} className="text-white focus:outline-none">
//                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             </button>
//                             {/* Mobile menu */}
//                             {isOpen && (
//                                 <div className="bg-gray-800 p-2 mt-2">
//                                     <ul>
//                                         {/* Mobile options with submenus */}
//                                         <li onClick={() => handleMobileOptionClick(0)}>
//                                             <a href="#">Option 1</a>
//                                             {subMenuOpen === 0 && (
//                                                 <ul className="bg-gray-700 p-2">
//                                                     <li><a href="#">Suboption 1</a></li>
//                                                     <li><a href="#">Suboption 2</a></li>
//                                                     <li><a href="#">Suboption 3</a></li>
//                                                 </ul>
//                                             )}
//                                         </li>
//                                         <li onClick={() => handleMobileOptionClick(1)}>
//                                             <a href="#">Option 2</a>
//                                             {subMenuOpen === 1 && (
//                                                 <ul className="bg-gray-700 p-2">
//                                                     <li><a href="#">Suboption 1</a></li>
//                                                     <li><a href="#">Suboption 2</a></li>
//                                                     <li><a href="#">Suboption 3</a></li>
//                                                 </ul>
//                                             )}
//                                         </li>
//                                         <li onClick={() => handleMobileOptionClick(2)}>
//                                             <a href="#">Option 3</a>
//                                             {subMenuOpen === 2 && (
//                                                 <ul className="bg-gray-700 p-2">
//                                                     <li><a href="#">Suboption 1</a></li>
//                                                     <li><a href="#">Suboption 2</a></li>
//                                                     <li><a href="#">Suboption 3</a></li>
//                                                 </ul>
//                                             )}
//                                         </li>
//                                         <li onClick={() => handleMobileOptionClick(3)}>
//                                             <a href="#">Option 4</a>
//                                             {subMenuOpen === 3 && (
//                                                 <ul className="bg-gray-700 p-2">
//                                                     <li><a href="#">Suboption 1</a></li>
//                                                     <li><a href="#">Suboption 2</a></li>
//                                                     <li><a href="#">Suboption 3</a></li>
//                                                 </ul>
//                                             )}
//                                         </li>
//                                         <li onClick={() => handleMobileOptionClick(4)}>
//                                             <a href="#">Option 5</a>
//                                             {subMenuOpen === 4 && (
//                                                 <ul className="bg-gray-700 p-2">
//                                                     <li><a href="#">Suboption 1</a></li>
//                                                     <li><a href="#">Suboption 2</a></li>
//                                                     <li><a href="#">Suboption 3</a></li>
//                                                 </ul>
//                                             )}
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//             {children}
//         </>
//     );
// };

// export default Template;
