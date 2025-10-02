"use client";
import Sun from "@/../../public/sun.svg"
import Moon from "@/../../public/moon.svg"
import Monitor from "@/../../public/monitor.svg"
import './style.css';
import { useThemeContext, Theme } from "@/hooks/themeContext";
import { useLanguageContext } from "@/hooks/languageContext";
import CustomLabel from "../customLabel";

export default function Appearance() {
    const {theme, setTheme} = useThemeContext();
    const {translator} = useLanguageContext();
    return (
        <div className="appearance-container">
            <p className="appearance-command"><span>$</span> cat appearance</p>

            <p className="appearance-desc">{translator('appearance.title')}</p>

            <div className="appearance-values">
                <CustomLabel<Theme> active={theme === Theme.Light} title={translator('appearance.light')} value={Theme.Light} valueSetter={setTheme}>
                    <Sun width={16} height={16}/>
                </CustomLabel>
                <CustomLabel<Theme> active={theme === Theme.Dark} title={translator('appearance.dark')} value={Theme.Dark} valueSetter={setTheme}>
                    <Moon width={16} height={16}/>
                </CustomLabel>
                <CustomLabel<Theme> active={theme === Theme.System} title={translator('appearance.system')} value={Theme.System} valueSetter={setTheme}>
                    <Monitor width={16} height={16}/>
                </CustomLabel>
            </div>
        </div>
    );
}