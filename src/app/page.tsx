"use client";
import Technologies from "@/components/technologies";
import TextBox from "@/components/textBox";
import WidgetWrapper from "@/components/widgetWrapper";
import Window from "@/components/window";

export default function Home() {
  return (
    <WidgetWrapper maxSetWidth={720}>
      <div style={{padding: '8px'}}>
        <TextBox title="About" paragraphs={["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]} useEcho={false}/>
      </div>
      <div style={{padding: '8px'}}>
        <Technologies/>
      </div>
    </WidgetWrapper>
  );
}
