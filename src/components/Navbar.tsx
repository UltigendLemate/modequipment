import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='flex font-mont justify-between py-2 px-5 '>
        <Image src="/modlogo.jpg" width={150} height={70} alt="" />
  
            <ul className='flex gap-x-7 items-center font-medium text-xl'>
                <li >Homesdf</li>
                <li>About</li>
                <li>Services</li>
                <li >Contact</li>
            </ul>
     

    </nav>
  )
}

export default Navbar;