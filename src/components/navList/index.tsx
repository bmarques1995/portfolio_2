"use client";
import HeaderItem from "../headerItem";
import { usePathname } from "next/navigation";
import './style.css';
import filterPathname from "@/shared/filterPathname";

export default function NavList() {
    const pathname = usePathname();
    const filteredPathname = filterPathname(pathname);

    return (
        <ul>
            <li><HeaderItem name="Home" link="/" selected={filteredPathname === ""}/></li>
            <li><HeaderItem name="Portfolio" link="/portfolio" selected={filteredPathname === "portfolio"} /></li>
            <li><HeaderItem name="Posts" link="/posts" selected={filteredPathname === "posts"} /></li>
            <li><HeaderItem name="Settings" link="/settings" selected={filteredPathname === "settings"} /></li>
        </ul>            
    );
}