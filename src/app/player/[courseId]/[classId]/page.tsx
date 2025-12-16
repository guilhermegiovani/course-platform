'use client'
import { PlayerClassGroup, PlayerHeader, PlayerPlaylist } from "@/components/player"
import { useParams } from "next/navigation"

// interface Props {
//     params: {
//         courseId: string,
//         classId: string
//     }
// }

export default function PagePlayer() {
    // { params }: Props
    const { courseId, classId } = useParams<{
        courseId: string
        classId: string
    }>()

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
                        classGroups={[
                            {
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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
                                title: "Introdução e apresentação do projeto",
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

                        ]}
                    />
                </div>

                <div className="flex-1">
                    Player
                </div>
            </div>
        </main>
    )
}