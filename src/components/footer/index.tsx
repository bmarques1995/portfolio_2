"use client";
import { useLanguageContext } from "@/hooks/languageContext";
import Window from "@/components/window";
import Linkedin from "@/../../public/linkedin.svg"
import Github from "@/../../public/github.svg"
import Instagram from "@/../../public/instagram.svg"
import ExternalLink from "@/components/externalLink";
import './style.css'

export default function Footer() {
    const {translator} = useLanguageContext();
    return (
        <footer>
            <Window title="social-links.sh">
                <div className="social-container">
                    <p className="presenter-msg"><span>$</span> echo "{translator('footer.contact')}"</p>
                    <p className="echo-msg">{translator('footer.contact')}</p>
                    <ul>
                        <li><ExternalLink link="https://www.linkedin.com/in/bruno-silva-marques/" title="Linkedin" icon={<Linkedin className="linkedin" width={16} height={16}/>}/></li>
                        <li><ExternalLink link="https://github.com/bmarques1995" title="Github" icon={<Github className="github" width={16} height={16}/>}/></li>
                        <li><ExternalLink link="https://github.com/bmarques1995" title="Instagram" icon={<Instagram className="github" width={16} height={16}/>}/></li>
                    </ul>
                </div>
            </Window>
            {//Twemoji Emojis
            }
        </footer>
    );
}

//<li><a href="https://www.linkedin.com/in/bruno-silva-marques/" target="blank">&gt; Linkedin <Linkedin className="linkedin" width={16} height={16}/></a></li>
