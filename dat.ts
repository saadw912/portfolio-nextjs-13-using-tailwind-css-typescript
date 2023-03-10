import{RiComputerLine} from "react-icons/ri"
import{BsWordpress} from "react-icons/bs"
import{AiOutlineApi, AiOutlineAntDesign} from "react-icons/ai"
import{MdDeveloperMode} from "react-icons/md"
import{BsCircleFill} from "react-icons/bs"
import { IService, Iskill } from "./type"

export const services:IService[] =[
    {
        Icon:BsWordpress,
        title:"Wordpress Developer",
        about:"Design and Implement websites for companies using the <b>WordPress</b>",
    },
    {
        Icon:RiComputerLine,
        title:"Frontend Developer",
        about:" I can build a beautifull and scalable SPA using <b>HTML,CSS</b> & <b>React.js</b>.",

    },
    {
        Icon:AiOutlineApi,
        title:"API Developement",
        about:"I can develope restfull API using <b>django-rest-api</b> & <b>Node API</b>",

    },
    {
        Icon:MdDeveloperMode,
        title:"Compitative Coder",
        about:"A daily problem solver in <b>HackerRank</b> and <b>Leet Code</b>",

    },
    {
        Icon:AiOutlineAntDesign,
        title:"UI/UX Design",
        about:"Stunning user interface Design using <b>Figma</b> & <b>PhotoShop</b>",

    },
    {
        Icon:RiComputerLine,
        title:"Whatever",
        about:"Lorem ipsum dolor consectetur sed do eiusmod tempor incididunt",

    }
]
export const language:Iskill[]=[
    {
        name:"HTML",
        level:"80%",
        Icon:BsCircleFill
    },
    {
        name:"CSS",
        level:"75%",
        Icon:BsCircleFill
    },
    {
        name:"JavaScript",
        level:"70%",
        Icon:BsCircleFill
    },
    {
        name:"React",
        level:"60%",
        Icon:BsCircleFill
    },
    {
        name:"Tailwind Css",
        level:"65%",
        Icon:BsCircleFill
    },
    {
        name:"Bootstrap",
        level:"85%",
        Icon:BsCircleFill
    }
]
export const tools:Iskill[]=[
    {
        Icon:BsCircleFill,
        name:"Wordpress",
        level:"85%"
    },
    {
        Icon:BsCircleFill,
        name:"PhotoShop",
        level:"75%"
    },
    {
        Icon:BsCircleFill,
        name:"Figma",
        level:"65%"
    },
    {
        Icon:BsCircleFill,
        name:"Framer",
        level:"65%"
    },
]