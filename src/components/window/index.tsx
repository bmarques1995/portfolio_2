"use client";
import WindowLabels from "../windowLabels";
import "./style.css";

export default function Window({title}: {title: string})
{
    return(
        <section className="window-container window-component">
            <div className="title-bar window-component">
                <WindowLabels/>
                <p className="file-title">{title}</p>
                <div className="space-controller"></div>
            </div>
            <div className="content-area window-component">

            </div>
        </section>
    );
}