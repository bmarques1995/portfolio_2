"use client";
import Technologies from "@/components/technologies";
import TextBox from "@/components/textBox";
import WidgetWrapper from "@/components/widgetWrapper";
import { useLanguageContext } from "@/hooks/languageContext";

export default function Home() {
  const {translator} = useLanguageContext();
  const presentationParagraphs: string[] = translator('root.about.paragraphs', { returnObjects: true }) as string[];
  return (
    <WidgetWrapper maxSetWidth={720}>
      <div style={{padding: '8px'}}>
        <TextBox title={translator('root.about.title')} paragraphs={presentationParagraphs} useEcho={false}/>
      </div>
      <div style={{padding: '8px'}}>
        <Technologies/>
      </div>
    </WidgetWrapper>
  );
}
