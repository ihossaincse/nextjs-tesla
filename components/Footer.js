import Link from 'next/link';
import React from 'react';

const menuItems = ["Tesla © 2022", "Privacy & Legal", "Contact", "Careers", "News", "Engage", "Locations"];

const Footer = () => {
    return (
        <div>
            <ul className="flex flex-wrap items-center justify-center p-4">
            {menuItems.map((item, index) => (
                <li key={item+index} className="flex items-center">
                    <Link href="#">
                        <a className="flex-grow px-2 py-1 text-sm font-medium text-center text-gray-600">
                            {item}
                        </a>
                    </Link>
                </li>
            ))}   
            </ul>
        </div>
    )
}

export default Footer
