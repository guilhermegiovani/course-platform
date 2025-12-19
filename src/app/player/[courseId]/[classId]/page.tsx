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
                <div className="max-w-96">
                    <PlayerPlaylist
                        playingClassId={classId}
                        playingCourseId={courseId}
                        classGroups={classGroupsData}
                    />
                </div>

                <PlayerClassDetails
                    playingClassId={classId}
                    playingCourseId={courseId}
                    classGroups={classGroupsData}
                />
            </div>
        </main>
    )
}