"use client";
import { useLanguageContext } from "@/hooks/languageContext";
import Window from "@/components/window";
import Linkedin from "@/../../public/assets/linkedin.svg"
import Github from "@/../../public/assets/github.svg"
import Instagram from "@/../../public/assets/instagram.svg"
import ExternalLink from "@/components/externalLink";
import './style.css'
import WidgetWrapper from "@/components/widgetWrapper";
import EchoCommand from "../echo";

export default function Footer() {
    const {translator} = useLanguageContext();
    return (
        
        <footer className="footer-component">
            <WidgetWrapper maxSetWidth={540}>
                <Window title="social-links" useLabels={false}>
                    <div className="social-container">
                        <EchoCommand text={translator('footer.contact')}/>
                        <ul>
                            <li><ExternalLink link="https://www.linkedin.com/in/bruno-silva-marques/" title="Linkedin" icon={<Linkedin className="linkedin" width={16} height={16}/>}/></li>
                            <li><ExternalLink link="https://github.com/bmarques1995" title="Github" icon={<Github className="github" width={16} height={16}/>}/></li>
                            <li><ExternalLink link="https://www.instagram.com/bsmarquesdev1995" title="Instagram" icon={<Instagram className="github" width={16} height={16}/>}/></li>
                        </ul>
                    </div>
                </Window>
            </WidgetWrapper>

            {//Twemoji Emojis
            }
        </footer>
    );
}

//<li><a href="https://www.linkedin.com/in/bruno-silva-marques/" target="blank">&gt; Linkedin <Linkedin className="linkedin" width={16} height={16}/></a></li>
