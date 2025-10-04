"use client";
import Appearance from "@/components/appearance";
import LanguageSetter from "@/components/language";
import Window from "@/components/window";
import { useLanguageContext } from "@/hooks/languageContext";
import WidgetWrapper from "@/components/widgetWrapper";

export default function Settings() {
  /*
  https://lucide.dev/icons/sun
  https://lucide.dev/icons/moon
  https://lucide.dev/icons/monitor
  */
  const {translator} = useLanguageContext();
  return (
    <div style={{padding: '8px'}}>
      <WidgetWrapper maxSetWidth={720}>
        <Window title={translator('appearance.window')}>
          <Appearance />
        </Window>
        <Window title={translator('language.window')}>
          <LanguageSetter />
        </Window>
      </WidgetWrapper>
    </div>
  );
}
