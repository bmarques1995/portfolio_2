"use client";
import Window from "../window";
import CMake from "@/../../public/cmake.svg";
import Cpp from "@/../../public/cpp.svg";
import C from "@/../../public/c.svg";
import Nextjs from "@/../../public/nextjs.svg";
import Python from "@/../../public/python.svg";
import TechnologyCard from "../technologyCard";
import { useLanguageContext } from "@/hooks/languageContext";
import './style.css'

export default function Technologies() {
    const squareSize = 48;

    const {translator} = useLanguageContext();
    return (
        <Window title={translator('root.titles.technologies')} useLabels={true}>
            <div className="tech-flex-container">
                <TechnologyCard name="C++" skill={90} icon={<Cpp width={squareSize} height={squareSize}/>}/>
                <TechnologyCard name="C" skill={75} icon={<C width={squareSize} height={squareSize}/>}/>
                <TechnologyCard name="CMake" skill={90} icon={<CMake width={squareSize} height={squareSize}/>}/>
                <TechnologyCard name="Nextjs" skill={50} icon={<Nextjs width={squareSize} height={squareSize}/>}/>
                <TechnologyCard name="Python" skill={65} icon={<Python width={squareSize} height={squareSize}/>}/>
            </div>
        </Window>
    );
}