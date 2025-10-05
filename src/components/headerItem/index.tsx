"use client";
import './style.css';
import { useRouter } from "next/navigation";

export default function HeaderItem({name, link, selected}: {name: string, link: string, selected: boolean}) {
    const router = useRouter();
    const defaultClassName = "header-a";
    let className = defaultClassName;
    if(selected)
        className = defaultClassName + " selected";
    return (
        <a role='button' onClick={() => router.push(link)} className={className}><span>&gt;</span> {name}</a>
    );
}
