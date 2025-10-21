import { getMDXPost } from '@/app/api/shared/mdxReader';
import { NextRequest } from 'next/server';
import path from 'path';
import { createCORSHeaders, handlePreflight } from '@/app/api/shared/origins';

//export async function GET(req: Request, { params }: { params: { context: string, locale: string, slug: string} })
export async function GET(
  req: NextRequest,
  context: RouteContext<'/api/posts/[context]/[locale]/[slug]'> // generic fallback
) {
    const params = await context.params;
    const post = getMDXPost(path.join(process.cwd(), 'src', 'app', 'articles', params.context, params.locale), params.slug);
    return new Response(JSON.stringify(post),
    {
        status: 200, 
        headers: {
        'Content-Type': 'application/json',
        ...createCORSHeaders(req),
        }
    });
}

export async function OPTIONS(req: NextRequest) {
    return handlePreflight(req);
}