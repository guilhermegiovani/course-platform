import Image from "next/image"
import Link from "next/link"

export interface ICardProps {
    href: string,
    image: string,
    title: string,
    description: string
}

// 'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg'
export const Card = ({title, description, image, href}: ICardProps) => {

    return (
        <Link href={href} className="hover:no-underline!">
            <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
                { /* img */}
                <Image
                    width={1000}
                    height={0}
                    draggable={false}
                    src={image}
                    alt={title}
                    className="aspect-video object-cover rounded-2xl"
                />
                {/*
                "high": {
                    "url": "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                */}
                <h4 className="font-extrabold text-lg">{title}</h4>
                <p className="line-clamp-3 sm:line-clamp-4 md:line-clamp-5">
                    {description}
                </p>
            </article>
        </Link>
    )
}
