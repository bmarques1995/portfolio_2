"use client";
import HeaderItem from "../headerItem";
import { usePathname } from "next/navigation";
import './style.css';
import filterPathname from "@/shared/filterPathname";
import { useLanguageContext } from "@/hooks/languageContext";

export default function NavList() {
    const pathname = usePathname();
    const filteredPathname = filterPathname(pathname);
    const {translator} = useLanguageContext();

    return (
        <ul>
            <li><HeaderItem name="home" link="/" selected={filteredPathname === ""}/></li>
            <li><HeaderItem name={translator('header.portfolio')} link="/portfolio" selected={filteredPathname === "portfolio"} /></li>
            <li><HeaderItem name="posts" link="/posts" selected={filteredPathname === "posts"} /></li>
            <li><HeaderItem name={translator('header.settings')} link="/settings" selected={filteredPathname === "settings"} /></li>
        </ul>            
    );
}