"use client";
import { useLanguageContext } from "@/hooks/languageContext";
import { useEffect, useState } from "react";
import { Metadata } from "@/app/api/shared/postMetadata";
import WidgetWrapper from "../widgetWrapper";
import './style.css';
import PostCard from "../postCard";

export default function Posts({context}: Readonly<{context: string}>)
{
    const {systemLanguage, languageMap, languageFence} = useLanguageContext();
    const language = languageMap.get(systemLanguage);
    const [postMetadata, setPostMetadata] = useState<{metadata: Metadata, slug: string}[]>([]);

    useEffect(() => {
        const searchPosts = async () =>{
            if(languageFence) {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_POSTS_HOST}/api/posts/posts/${language}`, {
                        method: "GET"
                    }
                );
                const posts = await response.json();
                setPostMetadata(posts);
            }
        }
        searchPosts();
    },[languageFence, language, setPostMetadata]);

    return (
        <WidgetWrapper maxSetWidth={720}>
            <div className="posts-container">
                {postMetadata.map((post, index) => {
                    return(<PostCard key={index} metadata={post.metadata} slug={post.slug}/>);
                    
                })}
            </div>
        </WidgetWrapper>
    );
}