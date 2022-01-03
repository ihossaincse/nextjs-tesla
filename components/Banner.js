import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = ({ name, img, dash, classTitle }) => {
    return (
        <div className="relative w-full h-screen">
            <Image src={img} alt={name} layout="fill" objectFit="cover" className="opacity-50" />
            <div className="relative z-10 flex flex-col items-center justify-between h-screen px-4 py-28">
                <div className="text-center">
                    <h2 className={`text-5xl font-semibold ${classTitle}`}>{name}</h2>
                    {!dash 
                        ? <p className="mt-2">
                            Order Online for <Link href="#"><a className="underline">Touchless Delivery</a></Link>
                        </p>
                        : ""
                    }
                </div>
                {!dash 
                    ? <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 sm:flex-row">
                        <button className="w-56 px-4 py-2 text-sm font-semibold text-white uppercase rounded-full bg-black/60">Custom Order</button>
                        <button className="w-56 px-4 py-2 text-sm font-semibold text-black uppercase rounded-full bg-white/60">Existing Inventory</button>
                    </div> 
                    : ""
                }
                
            </div>
        </div>
    )
}

export default Banner
