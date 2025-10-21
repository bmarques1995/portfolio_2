"use client";
import Article from "@/components/article";
import WidgetWrapper from "@/components/widgetWrapper";
import { useLanguageContext } from "@/hooks/languageContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    const params = useParams<{ slug: string }>()
    const {systemLanguage, languageMap, languageFence} = useLanguageContext();
    const language = languageMap.get(systemLanguage);
    const [postContent, setPostContent] = useState<string>("");
    const [postTitle, setPostTitle] = useState<string>("");

    useEffect(() => {
        const searchPost = async () =>{
            if(languageFence) {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_POSTS_HOST}/api/posts/posts/${language}/${params.slug}`, {
                        method: "GET"
                    }
                );
                const post = await response.json();
                setPostContent(post.content);
                setPostTitle(post.metadata.title);
            }
        }
        searchPost();
    },[languageFence, language, setPostContent]);
    return (
        <WidgetWrapper maxSetWidth={1080}>
            <div style={{padding: '8px', width: '100%'}}>
                <Article markdown={postContent} title={postTitle}/>
            </div>
        </WidgetWrapper>
    );
}