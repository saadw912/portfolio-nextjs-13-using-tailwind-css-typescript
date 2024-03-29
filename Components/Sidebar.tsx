"use client";
import Image from "next/image";
import{AiFillGithub, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import{GoLocation} from 'react-icons/go'
import{GiTie} from 'react-icons/gi';
import {useTheme} from 'next-themes';

export default function Sidebar(){
    const{theme,setTheme}=useTheme()
    const changeThme=()=>{
        setTheme(theme=="light"?"dark":"light");
    };
    return(
        <div className="dark:text-white">
            <Image 
            src="/profile-pic.jpg" alt="profile picture" width={100} height={100} className="mx-auto rounded-full " />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green ">saad </span>
                waheed
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
                Web Developer
                </p>
            <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500"
             href="#" download="#"> <GiTie className="w-6 h-6"/>
                Download Resume
            </a>
            <div className="flex justify-around w-9/12 py-5 mx-auto text-green md:w-full">
                <a href="#"><AiFillYoutube className="w-8 h-8 cursor-pointer"/></a>
                <a href="#"><AiFillGithub className="w-8 h-8 cursor-pointer"/></a>
                <a href="#"><AiFillLinkedin className="w-8 h-8 cursor-pointer"/></a>
            </div>


            <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation/>
                    <span>
                        Islamabad, Pakistan
                    </span>
                </div>
                <p className="my-2">saad@pide.org.pk</p>
                <p className="my-2">03015428931</p>
                </div>
                <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={()=>window.open('mailto:saadw912@gmail.com')}
                >
                    Email Me</button>
                <button 
                onClick={changeThme}
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">Toggle Theme</button>
            
        </div>



        

    )
}