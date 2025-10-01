"use client";
import Sun from "@/../../public/sun.svg"
import Moon from "@/../../public/moon.svg"
import Monitor from "@/../../public/monitor.svg"
import './style.css';
import { Dispatch, SetStateAction, useState } from "react";

function CustomLabel({children, active, title, value, valueSetter}: Readonly<{children: React.ReactNode, active: boolean, title: string, value: string, valueSetter: Dispatch<SetStateAction<string>>}>)
{
    //Dispatch<SetStateAction<boolean>>
    return (
        <label className="custom-label">
            <button onClick={() => {valueSetter(title); console.log(title)}}>
                {active &&
                <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="4" fill="currentColor"></circle></svg>
                }
            </button>
            {children}
            <span>{title}</span>
        </label>
    );
}

export default function Appearance() {
    const [buttonValue, setButtonValue] = useState("System Mode");
    console.log(buttonValue);
    return (
        <div className="appearance-container">
            <p className="appearance-command"><span>$</span> cat appearance</p>

            <p className="appearance-desc">theme mode</p>

            <div className="appearance-values">
                <CustomLabel active={buttonValue === "Light Mode"} title="Light Mode" value={buttonValue} valueSetter={setButtonValue}>
                    <Sun width={16} height={16}/>
                </CustomLabel>
                <CustomLabel active={buttonValue === "Dark Mode"} title="Dark Mode" value={buttonValue} valueSetter={setButtonValue}>
                    <Moon width={16} height={16}/>
                </CustomLabel>
                <CustomLabel active={buttonValue === "System Mode"} title="System Mode" value={buttonValue} valueSetter={setButtonValue}>
                    <Monitor width={16} height={16}/>
                </CustomLabel>
            </div>
        </div>
    );
}