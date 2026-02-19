import React, { useState } from 'react'
import Navbar from '../components/shared/Navbar'
import { Avatar, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from '../components/ui/badge'
import { Label } from '../components/ui/label'

import AppliedJobtable from '../components/Profile/AppliedJobtable'
import UpdateProfileDialog from '../components/Profile/UpdateProfileDialog'
const skills = ["Html", "Css", "Java Script", "React", "Express"]

const Profile = () => {
    const [open , setOpen] = useState(false)
    const [isHaveResume, setIsHaveResume] = useState(true)
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8  '>
                <div className='flex justify-between'>

                    <div className='flex items-center gap-4'>
                        <Avatar className={"h-24 w-24"}>
                            <AvatarImage src="https://img.freepik.com/premium-vector/company-logo-design-any-corporate-brand-suitable-your-business-company-etc_1300464-373.jpg?w=2000" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Full Name</h1>
                            <p>Add your bio here</p>
                        </div>
                    </div>
                    <Button className="text-right " variant="outline" onClick={()=>setOpen(true)}>
                        <Pen />
                    </Button>
                </div>
                <div className='my-5'>
                    <div className='flex gap-3 items-center my-2'>
                        <Mail />
                        <spam>abc@gmail.com</spam>

                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>123456789</span>

                    </div>
                </div>
                <div>
                    <h1>Skills</h1>
                    {
                        skills.length !== 0 ?
                            (skills.map((item, index) => <Badge className={'m-1'} key={index}>{item}</Badge>)) :
                            (<span>N/A</span>)
                    }
                </div>
                <div className='grid w-full max-w-sm items-center gsp-1.5'>
                    <Label className={'text-md font-bold'}>Resume</Label>
                    {
                        isHaveResume ? (<a target='blank' href='https://youtube.com' className='text-blue-500 w-full hover:underline'>Click to view Resume</a>) : (<span>N/A</span>)
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* Application table */}
                <AppliedJobtable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Profile