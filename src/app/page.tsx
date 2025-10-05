"use client";
import Technologies from "@/components/technologies";
import WidgetWrapper from "@/components/widgetWrapper";

export default function Home() {
  return (
    <WidgetWrapper maxSetWidth={720}>
      <div style={{padding: '8px'}}>
        <Technologies/>
      </div>
    </WidgetWrapper>
  );
}
