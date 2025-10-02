"use client";
import Appearance from "@/components/appearance";
import LanguageSetter from "@/components/language";
import Window from "@/components/window";
import { useLanguageContext } from "@/hooks/languageContext";

export default function Settings() {
  /*
  https://lucide.dev/icons/sun
  https://lucide.dev/icons/moon
  https://lucide.dev/icons/monitor
  */
  const {translator} = useLanguageContext();
  return (
    <div>
      <Window title={translator('appearance.window')}>
        <Appearance />
      </Window>
      <Window title={translator('language.window')}>
        <LanguageSetter />
      </Window>
    </div>
  );
}
