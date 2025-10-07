"use client";
import { useLanguageContext } from "@/hooks/languageContext";
import { useEffect, useState } from "react";
import { Metadata } from "@/app/api/shared/postMetadata";
import './style.css';
import Window from "../window";

export default function PostCard({metadata, slug}: Readonly<{metadata: Metadata, slug: string}>)
{
    const {translator} = useLanguageContext();
    return (
        <Window useLabels={true} title={metadata.title}>
            <section className="card-title-container">
                <h2 className="card-title" onClick={() => console.log("clicked on card")}>{metadata.title}</h2>
                <h3 className="card-headline" onClick={() => console.log("clicked on card")}>{metadata.summary}</h3>
                <button className="card-redirector" type="button">{translator('post.readCommand')}</button>
            </section>
        </Window>
    );
}