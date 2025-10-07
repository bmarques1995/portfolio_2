import { getMDXPost } from '@/app/api/shared/mdxReader';
import path from 'path';

export async function GET(req: Request, { params }: { params: { context: string, locale: string, slug: string} })
{
    const { context, locale, slug } = await params;
    const post = getMDXPost(path.join(process.cwd(), 'src', 'app', 'articles', context, locale), slug);
    return new Response(JSON.stringify(post));
}