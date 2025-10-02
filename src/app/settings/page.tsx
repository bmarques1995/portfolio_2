"use client";
import Appearance from "@/components/appearance";
import LanguageSetter from "@/components/language";
import Window from "@/components/window";

export default function Settings() {
  /*
  https://lucide.dev/icons/sun
  https://lucide.dev/icons/moon
  https://lucide.dev/icons/monitor
  */
  return (
    <div>
      <Window title="Appearance">
        <Appearance />
      </Window>
      <Window title="Settings">
        <LanguageSetter />
      </Window>
    </div>
  );
}
