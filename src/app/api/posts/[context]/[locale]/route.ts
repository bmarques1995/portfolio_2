import { getMDXMetadata } from '@/app/api/shared/mdxReader';
import { NextRequest } from 'next/server';
import path from 'path';

//export async function GET(req: Request, { params }: { params: { context: string, locale: string} })
export async function GET(
  req: NextRequest,
  context: RouteContext<'/api/posts/[context]/[locale]'> // generic fallback
) {
    const params  = await context.params;
    const posts = getMDXMetadata(path.join(process.cwd(), 'src', 'app', 'articles', params.context, params.locale));
    const postsMetadata = posts.map((post, index) => {
        return {
            metadata: post.metadata,
            slug: post.slug
        };
    });
    return new Response(JSON.stringify(postsMetadata));
}