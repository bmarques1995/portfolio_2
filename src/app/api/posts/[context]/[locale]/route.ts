import { getMDXMetadata } from '@/app/api/shared/mdxReader';
import path from 'path';

export async function GET(req: Request, { params }: { params: { context: string, locale: string} })
{
    const { context, locale } = await params;
    const posts = getMDXMetadata(path.join(process.cwd(), 'src', 'app', 'articles', context, locale));
    const postsMetadata = posts.map((post, index) => {
        return {
            metadata: post.metadata,
            slug: post.slug
        };
    });
    console.log(postsMetadata);
    return new Response(JSON.stringify(postsMetadata));
}