import { projects } from "@/dat";
import ProjectCard from "./ProjectCard";

export default function Project()
{
    return(
        <div className="px-5 py-2 overflow-y-scroll" style={{height:'65vh'}}>
            <nav>Navbar</nav>
            <div className="relative grid grid-cols-12 gap-4 my-3">
                {
                projects.map(project=>(
                    <div className="col-span-12 p-2 bg-gray-200 sm:col-span-6 lg:col-span-4 dark:bg-dark-200 rounded-xl">
                        <ProjectCard project={project} key={project.name}/>
                    </div>
                ))
                }
            </div>
        </div>
    );
}