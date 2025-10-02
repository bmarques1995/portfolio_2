"use client";
import { useLanguageContext } from "@/hooks/languageContext";
import './style.css'

export default function ExternalLink({icon, link, title}: Readonly<{icon: React.ReactNode, link: string, title: string}>) {
    const {translator} = useLanguageContext();
    return (
        <a href={link} target="blank" className="external-link"><span>&gt;</span>{title}{icon}</a>
    );
}