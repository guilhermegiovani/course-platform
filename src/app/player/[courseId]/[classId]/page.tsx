'use client'
import { PlayerClassDetails, PlayerHeader, PlayerPlaylist } from "@/components/player"
import { useParams } from "next/navigation"

// interface Props {
//     params: {
//         courseId: string,
//         classId: string
//     }
// }

export default function PagePlayer() {
    // { params: { courseId, classId } }: Props
    const { courseId, classId } = useParams<{
        courseId: string
        classId: string
    }>()

    const classGroupsData = [
        {
            title: "1 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-00',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                },
                {
                    classId: 'aula-01',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #01 - Apresentação do projeto"
                },
                {
                    classId: 'aula-02',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #02 - Apresentação do projeto"
                },
                {
                    classId: 'aula-03',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #03 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "2 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-04',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #04 - Apresentação do projeto"
                },
                {
                    classId: 'aula-05',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #05 - Apresentação do projeto"
                },
                {
                    classId: 'aula-06',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #06 - Apresentação do projeto"
                },
                {
                    classId: 'aula-07',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #07 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "3 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-00',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                },
                {
                    classId: 'aula-01',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #01 - Apresentação do projeto"
                },
                {
                    classId: 'aula-02',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #02 - Apresentação do projeto"
                },
                {
                    classId: 'aula-03',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #03 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "4 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-04',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #04 - Apresentação do projeto"
                },
                {
                    classId: 'aula-05',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #05 - Apresentação do projeto"
                },
                {
                    classId: 'aula-06',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #06 - Apresentação do projeto"
                },
                {
                    classId: 'aula-07',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #07 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "5 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-00',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                },
                {
                    classId: 'aula-01',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #01 - Apresentação do projeto"
                },
                {
                    classId: 'aula-02',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #02 - Apresentação do projeto"
                },
                {
                    classId: 'aula-03',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #03 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "6 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-04',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #04 - Apresentação do projeto"
                },
                {
                    classId: 'aula-05',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #05 - Apresentação do projeto"
                },
                {
                    classId: 'aula-06',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #06 - Apresentação do projeto"
                },
                {
                    classId: 'aula-07',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #07 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "7 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-00',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                },
                {
                    classId: 'aula-01',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #01 - Apresentação do projeto"
                },
                {
                    classId: 'aula-02',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #02 - Apresentação do projeto"
                },
                {
                    classId: 'aula-03',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #03 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "8 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-04',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #04 - Apresentação do projeto"
                },
                {
                    classId: 'aula-05',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #05 - Apresentação do projeto"
                },
                {
                    classId: 'aula-06',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #06 - Apresentação do projeto"
                },
                {
                    classId: 'aula-07',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #07 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "9 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-00',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                },
                {
                    classId: 'aula-01',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #01 - Apresentação do projeto"
                },
                {
                    classId: 'aula-02',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #02 - Apresentação do projeto"
                },
                {
                    classId: 'aula-03',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #03 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "10 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-04',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #04 - Apresentação do projeto"
                },
                {
                    classId: 'aula-05',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #05 - Apresentação do projeto"
                },
                {
                    classId: 'aula-06',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #06 - Apresentação do projeto"
                },
                {
                    classId: 'aula-07',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #07 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "11 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-00',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                },
                {
                    classId: 'aula-01',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #01 - Apresentação do projeto"
                },
                {
                    classId: 'aula-02',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #02 - Apresentação do projeto"
                },
                {
                    classId: 'aula-03',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #03 - Apresentação do projeto"
                },
            ]
        },
        {
            title: "12 - Introdução e apresentação do projeto",
            classes: [
                {
                    classId: 'aula-04',
                    done: true,
                    title: "NextJS, TailwindCSS e Typescript: #04 - Apresentação do projeto"
                },
                {
                    classId: 'aula-05',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #05 - Apresentação do projeto"
                },
                {
                    classId: 'aula-06',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #06 - Apresentação do projeto"
                },
                {
                    classId: 'aula-07',
                    done: false,
                    title: "NextJS, TailwindCSS e Typescript: #07 - Apresentação do projeto"
                },
            ]
        },

    ]

    return (
        <main className="flex flex-col gap-2 h-screen">
            <PlayerHeader
                title="NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                subtitle="🔔 NextJS, TailwindCSS e Typescript"
            />

            <div className="flex gap-2 h-[calc(100vh-72px)]">
                <div className="max-w-96 hidden md:block">
                    <PlayerPlaylist
                        playingClassId={classId}
                        playingCourseId={courseId}
                        classGroups={classGroupsData}
                    />
                </div>

                <PlayerClassDetails
                    course={{
                        id: courseId,
                        classGroups: classGroupsData,
                        title: "🎩 Curso de Figma para DEVs",
                        description: "Os melhores desenvolvedores do mercado fazem questão que estar preparados para os mais diversos tipos de desafios nas suas carreiras. A habilidade de desenvolver protótipos ou mesmo de entender como um protótipo foi desenvolvido pode ser um baita diferencial para você. Nesse curso que te mostrar de forma simples e prática como desenvolver protótipos no figma, vamos aproveitar certos conhecimentos de programação ao decorrer do curso. Tenho certeza que esse tem o potencial de ser o melhor curso de figma para desenvolvedores disponíveis gratuitamente. #CODARSE",
                        numberOfClasses: 48
                    }}
                    classItem={{
                        id: classId,
                        commentsCount: 15,
                        likesCount: 15,
                        viewsCount: 15,
                        videoId: 'bP47qRVRqQs',
                        title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto",
                        description: "Crie sua plataforma de cursos online com integração ao YouTube!\n\nCansado de usar o YouTube para aulas e perder tempo procurando por vídeos? Nesse curso, te ensino a criar sua própria plataforma de cursos online que se conecta ao YouTube para carregar e organizar suas aulas!\n\nAprenda a criar a plataforma do zero, com muito pouco conhecimento técnico, importar aulas do YouTube, organizar em módulos e seções e muito mais! A plataforma é personalizável e você adicionar mais recursos para vender cursos, ou permitir adicionar exercícios.\n\nDurante o desenvolvimento do curso vamos utilizar o NextJS, TailwindCSS e Typescript, além se conectar com as APIs do YouTube para trazer os detalhes das aulas e dos cursos.\n\nBônus: Acesso vitalício às atualizações, grupo exclusivo de alunos e muito mais!\n\n\nPrecisa de ajuda? Solicite uma ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA\n\n\nLinks mencionados no vídeo:\n🅵 Protótipo - https://www.figma.com/community/file/1349332873161679016/plataforma-de-cursos\n🗨️ Discord - https://discord.gg/ZC7JrPZn7P\n\nOutros cursos no canal:\n🔔 NextJS, TailwindCSS e Typescript - https://youtu.be/bP47qRVRqQs\n🎩 Figma para DEVs - https://youtu.be/4rSPV1NbM10\n☪️ Curso de estilização no React - https://youtu.be/oUbPkR799fc\n⭐️ Curso de React com typescript - https://youtu.be/1bEbBkWc4-I\n👑 React, Material UI 5 e Typescript - https://youtu.be/wLH1Vv86I44\n🏆 Curso de API Rest, Node e Typescript - https://youtu.be/SVepTuBK4V0\n\nLivros recomendados:\n📘 Código limpo - https://amzn.to/43Xiick\n📘 Arquitetura limpa - https://amzn.to/3ZMCStr\n📘 Migrando sistemas monolíticos - https://amzn.to/45ByPDZ\n📘 The Micro SaaS Handbook - https://amzn.to/4jCan93\n\nConteúdo:\n0:00 | Introdução\n0:29 | O que veremos nessa aula\n1:10 | Cronograma no notion\n2:00 | Versão do NodeJS\n3:00 | Abrindo e analizando o site publicado\n4:00 | Entendendo a dinâmica da plataforma de cursos online\n6:00 | SSR\n8:40 | Porque criar uma plataforma de cursos\n10:00 | Tela de player\n16:00 | Continuar assistindo\n17:15 | Aplicação responsiva\n22:40 | Finalização e agradecimentos\n\nCODARSE - Introdução e apresentação do projeto\n\n#DesenvolvimentoWeb #Programação #DesenvolvimentoDeSoftware #AprenderProgramação #CursosOnline #TechTutoriais #YouTubeEducação #CodeNewbies #DesenvolvimentoFrontend #CodeWithMe #TecnologiaEducacional #WebDesign #DesenvolvimentoDeAplicativos #AprendaACodificar #TecnologiaDeFrontend #EducaçãoDigital #DesenvolvimentoDeApps #TutoriaisDeProgramação #CódigoCriativo #ProgramaçãoParaIniciantes"
                    }}
                />
            </div>
        </main>
    )
}