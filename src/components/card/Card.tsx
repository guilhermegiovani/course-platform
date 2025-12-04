import Image from "next/image"
import Link from "next/link"


export const Card = () => {

    return (
        <Link href={'/cursos/idCurso'} className="">
            <article className="flex flex-col gap-2 p-2 rounded hover:no-underline sm:hover:bg-primary">
                { /* img */}
                <Image
                    width={1000}
                    height={0}
                    draggable={false}
                    src={'https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg'}
                    alt='Curso de API Rest, Node e TypeScript'
                    className="aspect-video object-cover rounded-3xl"
                />
                {/*
                "high": {
                    "url": "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                },
                */}
                <h4 className="font-extrabold text-lg">Curso de API Rest, Node e TypeScript</h4>
                <p className="line-clamp-3 sm:line-clamp-4">
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
                </p>
            </article>
        </Link>
    )
}
