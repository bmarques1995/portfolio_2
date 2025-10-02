"use client";
import './style.css';
import { useLanguageContext, Language } from "@/hooks/languageContext";
import CustomLabel from "../customLabel";

export default function LanguageSetter() {
    const {language, setLanguage} = useLanguageContext();
    return (
        <div className="language-container">
            <p className="language-command"><span>$</span> cat language</p>

            <p className="language-desc">language mode</p>

            <div className="language-values">
                <CustomLabel<Language> active={language === Language.EN_US} title="en-us" value={Language.EN_US} valueSetter={setLanguage}>
                    <></>
                </CustomLabel>
                <CustomLabel<Language> active={language === Language.PT_BR} title="pt-br" value={Language.PT_BR} valueSetter={setLanguage}>
                    <></>
                </CustomLabel>
            </div>
        </div>
    );
}