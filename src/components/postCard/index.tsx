"use client";
import { useLanguageContext } from "@/hooks/languageContext";
import { useEffect, useState } from "react";
import { Metadata } from "@/app/api/shared/postMetadata";
import './style.css';
import Window from "../window";
import { useRouter } from "next/navigation";

export default function PostCard({context, metadata, slug}: Readonly<{context: string; metadata: Metadata, slug: string}>)
{
    const {translator} = useLanguageContext();
    const router = useRouter();

    const clicker = () => {
        router.push(`/${context}/${slug}`)
    }
    return (
        <Window useLabels={true} title={metadata.title}>
            <section className="card-title-container">
                <h2 className="card-title" onClick={() => clicker()}>{metadata.title}</h2>
                <h3 className="card-headline" onClick={() => clicker()}>{metadata.summary}</h3>
                <button className="card-redirector" type="button" onClick={() => clicker()}>{translator('post.readCommand')}</button>
            </section>
        </Window>
    );
}