"use client";
import WindowLabels from "../windowLabels";
import "./style.css";

export default function Window({children, title, useLabels}: Readonly<{
  children: React.ReactNode;
  title: string;
  useLabels: boolean
}>)
{
    let horizontalStrategy = "space-between";
    if(!useLabels)
        horizontalStrategy = "center";
    return(
        <section className="window-container window-component">
            <div className="title-bar window-component" style={{justifyContent: horizontalStrategy}}>
                {useLabels && <WindowLabels/>}
                <p className="file-title">{title}</p>
                {useLabels &&<div className="space-controller"></div>}
            </div>
            <div className="content-area window-component">
                {children}
            </div>
        </section>
    );
}