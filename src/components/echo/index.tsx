"use client";
import './style.css';

export default function EchoCommand({text}:Readonly<{text: string}>)
{
    return(
        <>
            <p className="presenter-msg"><span>$</span> echo "{text}"</p>
            <p className="echo-msg">{text}</p>
        </>
    );
}