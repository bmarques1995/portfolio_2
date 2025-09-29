"use client";
import './style.css';

export default function WindowLabels(){
    return (
        <div className="window_labels">
            <div className="main_button close"></div>
            <div className="main_button minimize"></div>
            <div className="main_button maximize"></div>
        </div>
    );
}