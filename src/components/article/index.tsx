"use client";
import './style.css';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';
import Markdown from 'react-markdown';
import Window from "../window";
import rehypePrism from "rehype-prism-plus";

export default function Article({markdown, title}:Readonly<{markdown: string, title: string}>) {
    console.log(markdown);
    console.log(title);

    return (
        <Window useLabels={true} title={title}>
            <div className="markdown-post">
                <Markdown components={{
                    a: ({href, ...props}) => {
                    const isExternal = href && /^https?:\/\//.test(href);
                    return (
                        <a
                        {...props}
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        />
                    );
                    },
                }} rehypePlugins={[rehypePrism]}>
                    {markdown}
                </Markdown>
            </div>
        </Window>
    );
}