"use client";
import Window from "@/components/window";
import EchoCommand from "../echo";
import './style.css'

export default function TextBox({title, paragraphs, useEcho}: Readonly<{title: string, paragraphs: string[], useEcho: boolean}>) {
    return (
        <Window title={title} useLabels={true}>
            <div className="textbox-container">
                {useEcho && <EchoCommand text={title}/>}
                {
                    paragraphs.map((paragraph, index) => {return(<p key={index}>{paragraph}</p>)})
                }
            </div>
        </Window>
    );
}