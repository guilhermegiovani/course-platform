'use client'
import { PlayerClassGroup, PlayerHeader } from "@/components/player"

interface Props {
    params: {
        courseId: string,
        classId: string
    }
}

export default function PagePlayer({ params: { courseId, classId } }: Props) {
    

    return (
        <main className="flex flex-col gap-20">
            <PlayerHeader
                title="NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                subtitle="🔔 NextJS, TailwindCSS e Typescript"
            />

            <PlayerClassGroup
                open={true}
                position={1}
                title="Introdução e apresentação do projeto"
                onToggle={() => console.log("toggle")}
                classes={[
                    {
                        done: true,
                        playing: false,
                        title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                    },
                    {
                        done: false,
                        playing: true,
                        title: "NextJS, TailwindCSS e Typescript: #02 - Apresentação do projeto"
                    },
                    {
                        done: false,
                        playing: false,
                        title: "NextJS, TailwindCSS e Typescript: #03 - Apresentação do projeto"
                    },
                    {
                        done: false,
                        playing: false,
                        title: "NextJS, TailwindCSS e Typescript: #04 - Apresentação do projeto"
                    },
                ]}
            />
        </main>
    )
}