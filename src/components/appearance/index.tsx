"use client";
import Sun from "@/../../public/sun.svg"
import Moon from "@/../../public/moon.svg"
import Monitor from "@/../../public/monitor.svg"
import './style.css';
import { useThemeContext, Theme } from "@/hooks/themeContext";
import CustomLabel from "../customLabel";

export default function Appearance() {
    const {theme, setTheme} = useThemeContext();
    return (
        <div className="appearance-container">
            <p className="appearance-command"><span>$</span> cat appearance</p>

            <p className="appearance-desc">theme mode</p>

            <div className="appearance-values">
                <CustomLabel<Theme> active={theme === Theme.Light} title="Light Mode" value={Theme.Light} valueSetter={setTheme}>
                    <Sun width={16} height={16}/>
                </CustomLabel>
                <CustomLabel<Theme> active={theme === Theme.Dark} title="Dark Mode" value={Theme.Dark} valueSetter={setTheme}>
                    <Moon width={16} height={16}/>
                </CustomLabel>
                <CustomLabel<Theme> active={theme === Theme.System} title="System Mode" value={Theme.System} valueSetter={setTheme}>
                    <Monitor width={16} height={16}/>
                </CustomLabel>
            </div>
        </div>
    );
}