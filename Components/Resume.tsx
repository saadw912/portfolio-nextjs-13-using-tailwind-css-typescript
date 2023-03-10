import { language, tools } from "@/dat";
import Bar from "./Bar";

export default function Resume(){
    return(
        <div className="px-6 py-2">
           <div className="grid gap-6 md:grid-cols-2">
            <div>
                <h5 className="my-3 text-2xl font-bold">Education</h5>
            
            <div>
                <h5 className="my-2 text-xl font-bold">
                    Bachlor of Computer Science
                </h5>
                <p className="font-semibold ">IQRA University Islamabad(2013-2017)</p>
                <p className="my-3">I have completed my Bachlor degree in Computer Science from IQRA University Islamabad</p>
            </div>
           </div>
            <div>
                <h5 className="my-3 text-2xl font-bold">Experince</h5>
            
            <div>
                <h5 className="my-2 text-xl font-bold">
                    Website Manager
                </h5>
                <p className="font-semibold ">PIDE(2013-2017)</p>
                <p className="my-3">I have completed my Bachlor degree in Computer Science from IQRA University Islamabad</p>
            </div>
           </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
            <div>
                <h5 className="my-3 text-2xl font-bold">Language & Frameworks</h5>
                <div className="my-2">
                    {
                        language.map(language=><Bar data={language} key={language.name}/>)
                    }
                </div>
            </div>
            <div>
                <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                <div className="my-2">
                    {
                        tools.map(tool=><Bar data={tool} key={tool.name}/>)
                    }
                </div>
            </div>
        </div>
        </div>
    )
}