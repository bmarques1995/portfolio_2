"use client";
import WindowLabels from "../windowLabels";
import "./style.css";

export default function WidgetWrapper({children, maxSetWidth}: Readonly<{
  children: React.ReactNode,
  maxSetWidth: number
}>)
{
    const treatedMaxWidth = `${maxSetWidth}px`;
    return(
        <div className="widget-wrapper">
            <div className="widget-wrapper-container" style={{maxWidth: treatedMaxWidth}}>
                {children}
            </div>
        </div>
    );
}