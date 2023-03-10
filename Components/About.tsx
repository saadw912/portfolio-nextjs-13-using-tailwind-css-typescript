"use client";
import { services } from "@/dat"
import ServicesCard from "./ServicesCard";
 
export default function About(){ 
    return(
        <div className="flex flex-col flex-grow px-6 pt-1">
           <h5 className="my-3 font-medium">
            I am a skilled person proficient in performing duties efficiently and well.
            I am an energetic and discipline person with a good academic background. 
            I possess good communication skills and leadership qualities.
            I am looking for a job opportunity where I can develop my skills more.
           </h5>
           <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100" style={{marginLeft:"-1.5rem",marginRight:"-1.5rem"}}>
            
            <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
            <div className="grid gap-6 lg:grid-cols-2">
                {
                    services.map(service=>(
                    <div className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1">
                    <ServicesCard service={service} />
                    </div>
                    
                    ))
                }
            </div>
           </div>
        </div>
    )
}
