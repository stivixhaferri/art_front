import react from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import Search from './Search'
import Nav from './Nav'
import { cookies } from 'next/headers'
  


const Navbar = async () => {


  const cookieStore = cookies()
    const theme = cookieStore.get('jwt');
    const token = theme && theme.value;
   
  
    
    return(
        <div className='bg-[#F7F7F7]'>
        <Nav  token={token} />
        </div>

    )
}


export default Navbar


