"use client";
import Window from "../window";
import './style.css';
import CMake from "@/../../public/cmake.svg";
import Cpp from "@/../../public/cpp.svg";
import C from "@/../../public/c.svg";
import Nextjs from "@/../../public/nextjs.svg";
import Python from "@/../../public/python.svg";

export default function TechnologyCard({name, skill, icon}: Readonly<{name:string, skill: number, icon: React.ReactNode}>) {
    console.log(skill);
    const relativeSize = `${skill}%`;
    return (
        <section className="tech-card">
            {icon}
            <p>{name}</p>
            <p>{skill}%</p>
            <div className="progress-bar-controller">
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{width: relativeSize}}></div>
                </div>
            </div>
        </section>
    );
}