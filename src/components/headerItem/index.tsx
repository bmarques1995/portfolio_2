"use client";
import './style.css';
import { useRouter } from "next/navigation";

export default function HeaderItem({name, link, selected}: {name: string, link: string, selected: boolean}) {
    const router = useRouter();
    let className = "";
    if(selected)
        className = "selected";
    return (
        <a onClick={() => router.push(link)} className={className}><span>&gt;</span> {name}</a>
    );
}
