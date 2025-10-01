export default function filterPathname(pathname: string) : string
{
    const pathnameOptions = pathname.split("/");
    if(pathnameOptions.length === 1)
        return "";
    else
        return pathnameOptions[1];
}