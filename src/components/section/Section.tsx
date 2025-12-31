'use client'

import clsx from "clsx"
import { Card, ICardProps } from "../card/Card"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { startTransition, UIEvent, useEffect, useRef, useState } from "react"

interface ISectionProps {
    title: string
    variant: 'grid' | 'h-list'
    items: ICardProps[]
}

export const Section = ({ title, items, variant = 'grid' }: ISectionProps) => {

    const scrollRef = useRef<HTMLUListElement>(null)

    const [scrollAt, setScrollAt] = useState<'start' | 'middle' | 'end'>('start')

    // useEffect(() => {}, [])
    const handleScroll = (event: UIEvent<HTMLUListElement, globalThis.UIEvent>) => {
        if (event.currentTarget.scrollLeft === 0) {
            setScrollAt('start')
        } else if ((event.currentTarget.scrollWidth - event.currentTarget.clientWidth) === event.currentTarget.scrollLeft - 1) {
            setScrollAt('end')
        } else {
            setScrollAt('middle')
        }
    }

    const handleSetScroll = (scroll: number) => {
        const currentScrollLeft = scrollRef.current?.scrollLeft || 0
        scrollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll })
    }

    return (
        <section className="flex flex-col gap-4 px-4">
            <h2 className="font-bold text-xl">{title}</h2>

            <ul
                ref={scrollRef}
                data-variant={variant}
                onScroll={handleScroll}
                className={clsx(
                    "grid grid-cols-1 sm:grid-cols-none gap-2",
                    "data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3",
                    "data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
                )}
            >
                {variant === 'h-list' && (
                    <button
                        className={clsx(
                            "sticky my-auto left-0 -ml-14",
                            "hidden sm:flex justify-center items-center h-14 w-14",
                            "bg-primary rounded-full cursor-pointer",
                            "transition-opacity disabled:opacity-0",
                            "active:opacity-80"
                        )}
                        onClick={() => handleSetScroll(-350)}
                        disabled={scrollAt === 'start'}
                    >
                        <MdKeyboardArrowLeft size={32} />
                    </button>
                )}


                {items.map((item) => (
                    <li key={item.title} data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                        <Card
                            href={item.href}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </li>
                ))}

                {variant === 'h-list' && (
                    <button
                        className={clsx(
                            "sticky my-auto right-0 -ml-14",
                            "hidden sm:flex justify-center items-center h-14 w-14",
                            "bg-primary rounded-full cursor-pointer",
                            "transition-opacity disabled:opacity-0",
                            "active:opacity-80"
                        )}
                        onClick={() => handleSetScroll(350)}
                        disabled={scrollAt === 'end'}
                    >
                        <MdKeyboardArrowRight size={32} />
                    </button>

                )}
            </ul>
        </section>
    )
}

