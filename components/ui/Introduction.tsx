"use client"
import Image from "next/image"
import sconic from '@/public/sonic.jpg'

function Introduction() {
    return (
        <div className="flex  w-full justify-between items-center"> 
            <div className="flex gap-3 items-center">
                <div>
                <Image 
                    src={sconic}
                    alt="Picture of the author"
                    className={`w-16  border-zinc-700 border-[2px] rounded-full `}

                />
                </div>
                
                <div className="text-2xl font-semibold">
                    Nikunj Makwana
                </div>
                
            </div>
            <div>
                <button type="button">Clieck mee to chang theme</button>
            </div>
        </div>
    )
}

export default Introduction