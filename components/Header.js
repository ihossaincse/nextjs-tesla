import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import logo from "../public/images/logo.png";
import { useStateValue } from '../StateProvider';
import MenuItem from "./MenuItem";

const menuItems = ["Shop"];
const menuCategories = ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"];
const menuToogle = ["Existing Inventory", "Used Inventory", "Trade-In", "Test Drive", "Cybertruck", "Roadster", "Semi", "Charging", "Powerwall", "Commercial Energy", "Utilities", "Find Us", "Support", "Investor Relations"];

const Header = () => {
    const [toogle, setToogle] = useState(false);
    const [{user}] = useStateValue();

    return (
        <div className="fixed top-0 z-50 flex items-center justify-between w-full px-2 py-2 xl:py-5 xl:px-12">
            <div className="relative w-4/12 xl:w-auto">
                <Link href="/">
                    <a>
                        <Image src={logo} alt="logo" width="120" height="14" />
                    </a>
                </Link>
            </div>
            <div className="hidden xl:inline-block">
                <ul className="flex items-center">
                {menuCategories.map((item, index) => (
                    <MenuItem key={item+index} item={item} />
                ))}   
                </ul>
            </div>
            <div className="w-8/12 pl-3 xl:w-auto xl:pl-0">
                <ul className="flex items-center">
                {menuItems.map((item, index) => (
                    <MenuItem key={item+index} item={item} />
                ))}   
                {user === true 
                    ? <MenuItem item="Dashboard" url="/dashboard" /> 
                    : <MenuItem item="Account" url="/teslaaccount" />
                }
                <MenuItem item="Menu +" setToogle={() => setToogle(true)} />
                </ul>   
            </div>
            {toogle && 
                <div className="absolute top-0 right-0 w-screen h-screen bg-gray-400/50">
                    <AiOutlineClose size={25} className="absolute z-50 cursor-pointer top-3 right-8" onClick={() => setToogle(false)} />
                    <ul className="flex flex-col w-full h-screen p-8 ml-auto mr-0 overflow-y-scroll bg-white xl:w-3/12">
                    {menuToogle.map((item, index) => (
                        <MenuItem key={item+index} item={item} />
                    ))}   
                    </ul>
                </div>
            }        
        </div>
    )
}

export default Header
