"use client";
import WindowLabels from "../windowLabels";
import './style.css';
import Bars from "@/../../public/bars.svg";
import CloseCross from "@/../../public/close-cross.svg"
import { useState, useEffect } from "react";
import NavList from "../navList";
import { useRouter, usePathname } from "next/navigation";
import filterPathname from "@/shared/filterPathname";

export default function Header() {
    const [activeBar, setActiveBar] = useState<boolean>(false);
    const [size, setSize] = useState<{width: number, height: number}>({ width: 0, height: 0 });
    const router = useRouter();
    const pathname = usePathname();
    const filteredPathname = filterPathname(pathname);

    useEffect(() => {
        setSize({ width: window.innerWidth, height: window.innerHeight });
        // update on resize
        window.addEventListener("resize", (event) => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        });
    }, []);

    return (
        <header className="blog-header">
            <div className="title-wrapper">
                <WindowLabels/>
                <section className="terminal center"><a onClick={() => router.replace("/")} className="username"><span className="blog-owner">bmarques</span>$<span className="blog-path">~{filteredPathname === "" ? "" : "/"}{filteredPathname}</span></a></section>
            </div>
            {size.width > 1024 &&
            <nav className="nav-links">
                <NavList/>
            </nav>
            }
            {size.width <= 1024 &&
            <nav className="nav-links">
                <Bars className="icon-bars" onClick={() => setActiveBar(true)} width={32} height={32}/>
                {
                    activeBar &&
                    <div className="full-container">
                        <div className="close-container" onClick={() => setActiveBar(false)}></div>
                        <div className="item-container">
                            <CloseCross className="close-cross" onClick={() => setActiveBar(false)} width={20} height={20}/>
                            <div className="list-container">
                                <NavList/>
                            </div>
                        </div>
                    </div>
                }
            </nav>
            }
        </header>
    );
}
