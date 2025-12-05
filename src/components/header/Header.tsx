'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md"


export const Header = () => {
    const [drawer, setDrawer] = useState(false)
    const [title, setTitle] = useState('CodarSe')
    const currentPath = usePathname()

    useEffect(() => {
        setTimeout(() => {
            setTitle(document.title)
            setDrawer(false)
        }, 0)
    }, [currentPath])

    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            if(e.key === "Escape") {
                setDrawer(false)
            }
        }

        window.addEventListener('keydown', handle)
        return () => window.removeEventListener('keydown', handle)

    }, [])

    return (
        <>
            <nav className={clsx(
                "flex items-center gap-6 justify-start",
                "fixed top-0 right-0 left-0",
                "md:justify-center bg-primary py-2 sm:py-4 px-6"
            )}>
                <button className="sm:hidden cursor-pointer" onClick={() => setDrawer(true)}>
                    <MdMenu size={24} />
                </button>

                <ul className="flex gap-4 items-center" tabIndex={drawer ? -1 : undefined}>
                    <li className="my-2">
                        <Link href='/' className="border-2 rounded-md py-2 px-1 font-bold">CODARSE</Link>
                    </li>

                    <li className="hidden sm:block">
                        <Link href='/' data-active={currentPath === '/'} className='data-[active=true]:underline outline-offset-2'>Páginal inicial</Link>
                    </li>

                    <li className="hidden sm:block">
                        <Link href='/cursos' data-active={currentPath === '/cursos'} className='data-[active=true]:underline outline-offset-2'>Cursos</Link>
                    </li>

                    <li className="hidden sm:block">
                        <Link href='https://blog.codarse.com' target="_blank" className="flex gap-1 items-center outline-offset-4">
                            Blog
                            <MdOutlineOpenInNew />
                        </Link>
                    </li>
                </ul>

                <div
                    data-open={drawer}
                    tabIndex={drawer ? undefined : -1}
                    onClick={() => setDrawer(false)}
                    className={clsx(
                        "sm:hidden fixed top-0 left-0 bottom-0 right-0",
                        "bg-gradient-to-r from-background transition-transform",
                        "data-[open=false]:-translate-x-full"
                    )}
                >
                    <ul
                        className="flex flex-col p-4 w-60 h-full gap-4 bg-background"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <li data-active={currentPath === '/'} className='data-[active=true]:border-b border-white'>
                            <Link href='/'>Páginal inicial</Link>
                        </li>
                        <li data-active={currentPath === '/cursos'} className='data-[active=true]:border-b border-white'>
                            <Link href='/cursos'>Cursos</Link>
                        </li>
                        <li className="">
                            <Link href='https://blog.codarse.com' target="_blank" className="flex gap-1 items-center">
                                Blog
                                <MdOutlineOpenInNew />
                            </Link>
                        </li>
                    </ul>
                </div>

                <h1 className="sm:hidden line-clamp-1">{title}</h1>
            </nav>

            <div className="h-14 sm:h-[72px]" />
        </>
    )
}