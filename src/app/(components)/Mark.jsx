'use client'
import react , {useState , useEffect} from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import { useRouter } from 'next/navigation'

const Mark = () => {

    const router = useRouter();

    const handleClick = (param) => {
        // router.push(`/s/${param}`)
    }

    return(
        <div className='lg:flex hidden  lg:flex-row  items-center gap-5 px-[10%] justify-evenly lg:py-4 pt-[15%] border-b-[0.5px]  border-t-[0.5px]'>
            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('bmw')} src="bmw.png" className='lg:w-[40px]' alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>BMW</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>


            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('audi')} src="audi.png" className=' object-cover w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>AUDI</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>


            
            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img  onClick={() => handleClick('citroen')} src="citroen.png" className=' object-cover w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>CITROEN</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>

            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('fiat')} src="fiat.png" className=' object-cover w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>FIAT</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>




            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('ford')} src="ford.png" className=' object-cover w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>FORD</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>



            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('jeep')} src="jeep.png" className=' object-cover w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>JEEP</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>



            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('mercedes_benz')} src="mercedes_benz.png" className=' object-contain w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>Mercedes Benz</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>


            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('nissan')} src="nissan.png" className=' object-contain w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>Nissan</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>


            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('opel')} src="opel.png" className=' object-contain w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>OPEL</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>


            
            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('peugeot')} src="peugeot.png" className=' object-contain w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>PEUGEOT</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>

            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img  onClick={() => handleClick('renault')} src="renault.png" className=' object-contain w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>RENTAULT</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>


            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img onClick={() => handleClick('subaru')} src="subaru.png" className=' object-contain w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>SUBARU</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>


            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img  onClick={() => handleClick('volkswagen')} src="volkswagen.png" className=' object-contain w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>VOLKSWAGEN</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>


            <div className='hover:border-b-gray-700 px-1 py-1 hover:border-b-[1px] border-b-[1px] border-b-[#F7F7F7]'>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div>
                        <img  onClick={() => handleClick('volvo')} src="volvo.png" className=' object-contain w-[40px]' style={{objectFit: 'cover'}} alt="" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>VOLVO</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
            </div>




        </div>
    )
}


export default Mark