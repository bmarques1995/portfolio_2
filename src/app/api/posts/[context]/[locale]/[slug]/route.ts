import { getMDXPost } from '@/app/api/shared/mdxReader';
import { NextRequest } from 'next/server';
import path from 'path';

//export async function GET(req: Request, { params }: { params: { context: string, locale: string, slug: string} })
export async function GET(
  req: NextRequest,
  context: RouteContext<'/api/posts/[context]/[locale]/[slug]'> // generic fallback
) {
    const params = await context.params;
    const post = getMDXPost(path.join(process.cwd(), 'src', 'app', 'articles', params.context, params.locale), params.slug);
    return new Response(JSON.stringify(post));
}