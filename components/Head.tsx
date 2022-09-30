import Head from "next/head";
interface Props {
    title: string;
    desc: string;
    keyword: string;
    url: string;
    imgUrl: string;
}

export default function Header({ title, desc, keyword, url, imgUrl }: Props) {
    if (process.env.VERCEL_URL) url = process.env.VERCEL_URL + url;
    return (
        <Head>
            <title>{title}</title>
            <meta name="robots" content="noindex,nofollow" />
            <meta name="googlebot" content="noindex,nofollow" />
            <meta httpEquiv="X-UA-Compatible" content="IE=7" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={desc} key="desc" />
            <meta name="keywords" content={keyword} />
            {/* meta og */}
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={imgUrl} />
            <meta property="og:description" content={desc} />
            <meta property="og:locale" content="uz_UZ" />
            <meta property="og:locale:alternate" content="ru_RU" />
            <meta property="og:site_name" content="futbolforma" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={url} />
        </Head>
    );
}