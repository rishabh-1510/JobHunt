import React from 'react'
import { Link } from 'react-router-dom'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {LogOut, User2} from "lucide-react"
const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between max-w-7xl mx-auto h-16'>
                <div>
                    <h1>Job<span className='text-[#F83002]'>Portal</span></h1>
                </div>
                <div className='flex items-center gap-12 '>
                    <ul className='flex font-medium items-center gap-5'>
                        <li>Home</li>
                        <li>Jobs</li>
                        <li>Browse</li>
                    </ul>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className="cursor-pointer">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div className='flex gap-4 space-y-2'>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className='font-medium'>Rishabh Mern Stack</h4>
                                    <p className='text-sm text-muted-foreground'>Rishabh Document</p>
                                </div>

                            </div>
                            <div className='flex flex-col my-2 items-start text-gray-600'>
                                <div className='flex w-fit items-center gap-1 cursor-pointer'>
                                    <User2/>
                                    <Button variant='link' className="cursor-pointer">View Profile</Button>
                                </div>
                                <div className='flex w-fit items-center gap-1 cursor-pointer'>
                                    <LogOut/> 
                                    <Button variant='link' className="cursor-pointer">Logout</Button>
                                </div>
                                
                            </div>

                        </PopoverContent>
                    </Popover>
                </div>
            </div>

        </div>
    )
}

export default Navbar


//3:40