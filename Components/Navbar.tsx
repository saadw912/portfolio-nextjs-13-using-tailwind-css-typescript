"use client";
import { useState } from "react";
import About from "@/Components/About";
import Resume from "@/Components/Resume";
import Project from "@/Components/Project";

export default function Home() {
  const [content, setContent] = useState<JSX.Element | null>(<About />);
  const [activeButton, setActiveButton] = useState("about");

  const handleButtonClick = (componentName: string) => {
    switch (componentName) {
      case "about":
        setContent(<About />);
        setActiveButton("about");
        break;
      case "resume":
        setContent(<Resume />);
        setActiveButton("resume");
        break;
      case "project":
        setContent(<Project />);
        setActiveButton("project");
        break;
      default:
        setContent(null);
        setActiveButton("");
    }
  };

  const getButtonClass = (buttonName: string) =>
    activeButton === buttonName ? "text-xl text-green border-b-4 border-green -order-last med:text-2xl dark:text-white" : "";

  return (
    <div className="dark:text-white">
    <div className="flex justify-between px-5 py-3 my-3 space-x-3 text-lg text-red-400 dark:text-white">
      <button
        onClick={() => handleButtonClick("about")}
        className={getButtonClass("about")}
      >
        About
      </button>
      <button
        onClick={() => handleButtonClick("resume")}
        className={getButtonClass("resume")}
      >
        Resume
      </button>
      <button
        onClick={() => handleButtonClick("project")}
        className={getButtonClass("project")}
      >
        Projects
      </button>
     
    </div>
    {content}
    </div>
  );
}