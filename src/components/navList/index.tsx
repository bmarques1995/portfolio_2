"use client";
import HeaderItem from "../headerItem";
import { usePathname } from "next/navigation";
import './style.css';

export default function NavList() {
    const pathname = usePathname();
    
    return (
        <ul>
            <li><HeaderItem name="Home" link="/" selected={pathname === "/"}/></li>
            <li><HeaderItem name="Portfolio" link="/portfolio" selected={pathname === "/portfolio"} /></li>
            <li><HeaderItem name="Posts" link="/posts" selected={pathname === "/posts"} /></li>
            <li><HeaderItem name="Settings" link="/settings" selected={pathname === "/settings"} /></li>
        </ul>            
    );
}