"use client";
import Sun from "@/../../public/sun.svg"
import Moon from "@/../../public/moon.svg"
import Monitor from "@/../../public/monitor.svg"
import './style.css';
import { Dispatch, SetStateAction, useState } from "react";
import { useThemeContext, Theme } from "@/hooks/themeContext";

function CustomLabel({children, active, title, value, valueSetter}: Readonly<{children: React.ReactNode, active: boolean, title: string, value: Theme, valueSetter: (theme : Theme) => void}>)
{
    return (
        <label className="custom-label">
            <button onClick={() => {valueSetter(value)}}>
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
    const {theme, setTheme} = useThemeContext();
    return (
        <div className="appearance-container">
            <p className="appearance-command"><span>$</span> cat appearance</p>

            <p className="appearance-desc">theme mode</p>

            <div className="appearance-values">
                <CustomLabel active={theme === Theme.Light} title="Light Mode" value={Theme.Light} valueSetter={setTheme}>
                    <Sun width={16} height={16}/>
                </CustomLabel>
                <CustomLabel active={theme === Theme.Dark} title="Dark Mode" value={Theme.Dark} valueSetter={setTheme}>
                    <Moon width={16} height={16}/>
                </CustomLabel>
                <CustomLabel active={theme === Theme.System} title="System Mode" value={Theme.System} valueSetter={setTheme}>
                    <Monitor width={16} height={16}/>
                </CustomLabel>
            </div>
        </div>
    );
}