import Image, { StaticImageData } from "next/image";

export default ({ url, className = '' }: { url: StaticImageData; className?: string; }) => (
    <Image
        src={url}
        layout='fill'
        placeholder="blur"
        className={className}
        blurDataURL={url.blurDataURL}
        alt={url.src.split('/').slice(-1)[0]}
    />
);