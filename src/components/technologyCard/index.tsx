"use client";
import './style.css';

export default function TechnologyCard({name, skill, icon}: Readonly<{name:string, skill: number, icon: React.ReactNode}>) {
    const relativeSize = `${skill}%`;
    return (
        <section className="tech-card">
            {icon}
            <p>{name}</p>
            <p>{skill}%</p>
            <div className="progress-bar-controller">
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{width: relativeSize}}></div>
                </div>
            </div>
        </section>
    );
}