"use client";
import './style.css';
import { useLanguageContext, SystemLanguage } from "@/hooks/languageContext";
import CustomLabel from "../customLabel";

export default function LanguageSetter() {
    const {systemLanguage, setSystemLanguage, translator} = useLanguageContext();
    return (
        <div className="language-container">
            <p className="language-command"><span>$</span> cat language</p>

            <p className="language-desc">language settings {translator('header')}</p>

            <div className="language-values">
                <CustomLabel<SystemLanguage> active={systemLanguage === SystemLanguage.EN_US} title="en-us" value={SystemLanguage.EN_US} valueSetter={setSystemLanguage}>
                    <></>
                </CustomLabel>
                <CustomLabel<SystemLanguage> active={systemLanguage === SystemLanguage.PT_BR} title="pt-br" value={SystemLanguage.PT_BR} valueSetter={setSystemLanguage}>
                    <></>
                </CustomLabel>
            </div>
        </div>
    );
}