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


                {/* <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                    <Card
                        href="/cursos/123"
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        title="Curso de API Rest, Node e TypeScript"
                        description={`
          Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
                    Links mencionados no vídeo:
                    📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
                    🗨️ Discord -   / discord
                    Outros cursos no canal:
                    🎩 Figma para DEVs -    • Figma para DEVs: #00 - Apresentação do curso
                    ☪️ Curso de estilização no React -    • Estilização no React: Aula 00 - Curso de f...
                    ⭐️ Curso de React com typescript -    • Curso de react: Aula 01 - Começando com Re...
                    👑 React, Material UI 5 e Typescript -    • React, Material UI 5 e Typescript: #00 - I...
                    🏆 Curso de API Rest, Node e Typescript -    • API Rest, Node e Typescript: #00 - Apresen...
                    Livros recomendados:
                    📘 Código limpo - https://amzn.to/43Xiick
                    📘 Arquitetura limpa - https://amzn.to/3ZMCStr
                    📘 Migrando sistemas monolíticos - https://amzn.to/45ByPDZ
                    📘 The Micro SaaS Handbook - https://amzn.to/4jCan93
                    Conteúdo:
                    0:00 | Introdução
                    0:27 | Apresentação das tecnologias usadas no curso
                    2:20 | Pra quem é o curso?
                    4:30 | Sobre a API Rest em Node JS que vamos desenvolver
                    5:32 | Qual a proposta do curso?
                    7:24 | A cereja do bolo
                    8:44 | Outros cursos do canal
                    10:00 | Vendo como ficou o projeto
                    10:48 | Testando no insominia
                    15:30 | Apresentando o frontend de testes
                    19:50 | Considerações finais
                    CODARSE - Introdução e apresentação do projeto
                    #typescript #cursotypescript #javascript #cursodejavascript #reactetypescript #learningtypescript #learningjavascript  
        `}
                    />
                </li>

                <li data-variant={variant} className="w-full data-[variant=h-list]:sm:w-72">
                    <Card
                        href="/cursos/123"
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        title="Curso de API Rest, Node e TypeScript"
                        description={`
          Na primeira aula do curso de API Rest em Node e Typescript vamos ver juntos o escopo do curso e se esse curso faz sentido para você ou não. Quero te apresentar as tecnologias e conceitos que vamos usar no projeto que será desenvolvido ao longo do curso, ainda vamos entender como serão  criados os testes que usaremos para garantir a qualidade do código e no final vamos ver o frontend que eu vou te entregar de brinde para usar com esse backend.
                    Links mencionados no vídeo:
                    📖 Repositório do projeto - https://github.com/lvsouza/youtube-cu...
                    🗨️ Discord -   / discord
                    Outros cursos no canal:
                    🎩 Figma para DEVs -    • Figma para DEVs: #00 - Apresentação do curso
                    ☪️ Curso de estilização no React -    • Estilização no React: Aula 00 - Curso de f...
                    ⭐️ Curso de React com typescript -    • Curso de react: Aula 01 - Começando com Re...
                    👑 React, Material UI 5 e Typescript -    • React, Material UI 5 e Typescript: #00 - I...
                    🏆 Curso de API Rest, Node e Typescript -    • API Rest, Node e Typescript: #00 - Apresen...
                    Livros recomendados:
                    📘 Código limpo - https://amzn.to/43Xiick
                    📘 Arquitetura limpa - https://amzn.to/3ZMCStr
                    📘 Migrando sistemas monolíticos - https://amzn.to/45ByPDZ
                    📘 The Micro SaaS Handbook - https://amzn.to/4jCan93
                    Conteúdo:
                    0:00 | Introdução
                    0:27 | Apresentação das tecnologias usadas no curso
                    2:20 | Pra quem é o curso?
                    4:30 | Sobre a API Rest em Node JS que vamos desenvolver
                    5:32 | Qual a proposta do curso?
                    7:24 | A cereja do bolo
                    8:44 | Outros cursos do canal
                    10:00 | Vendo como ficou o projeto
                    10:48 | Testando no insominia
                    15:30 | Apresentando o frontend de testes
                    19:50 | Considerações finais
                    CODARSE - Introdução e apresentação do projeto
                    #typescript #cursotypescript #javascript #cursodejavascript #reactetypescript #learningtypescript #learningjavascript  
        `}
                    />
                </li> */}
            </ul>
        </section>
    )
}

