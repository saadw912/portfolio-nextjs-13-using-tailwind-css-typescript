"use client";
import Navbar from '@/Components/Navbar'
import Sidebar from '@/Components/Sidebar'
import { ThemeProvider } from 'next-themes'




export default function Home() {
  return (
    <ThemeProvider attribute='class'>
      
    
   <div className='grid grid-cols-12 gap-6 px-5 py-2 lx:px-48 sm:px-20 md:px-32 lg:px-36 lg:mb-0 md:mb-16 bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700'>
     <div className='h-full col-span-12 p-4 text-base text-center bg-white lg:col-span-3 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
      <Sidebar />
     </div>
     <div className='flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark'>
      <Navbar />
      
     </div>
   </div>
   </ThemeProvider>
  )
}
