import { getMDXData } from '@/app/api/shared/mdx_reader';
import path from 'path';

export async function GET(req: Request, { params }: { params: { context: string, locale: string} })
{
    const { context } = params;
    const { locale } = params;
    console.log(process.cwd());
    const posts = getMDXData(path.join(process.cwd(), 'src', 'app', 'articles', context, locale));
    return new Response(JSON.stringify(posts));
}