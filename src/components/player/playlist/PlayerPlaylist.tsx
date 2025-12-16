'use client'
import { useState } from "react"
import { IPlayerClassGroupProps, PlayerClassGroup } from "./components/PlayerClassGroup"
import { useRouter } from "next/navigation"


interface IPlayerPlaylistProps {
    playingCourseId: string
    playingClassId: string
    classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[]
}

export const PlayerPlaylist = ({ classGroups, playingClassId, playingCourseId }: IPlayerPlaylistProps) => {
    const [openedIndex, setOpenedIndex] = useState<number | undefined>(undefined)

    const router = useRouter()


    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col p-4 bg-paper">
                <h3 className="text-lg font-bold">Conteúdo do curso</h3>
            </div>

            <ol>
                {classGroups.map((classGroup, index) => (
                    <li key={classGroup.title}>
                        <PlayerClassGroup
                            {...classGroup}
                            // open={true}
                            // position={1}
                            // title="Introdução e apresentação do projeto"
                            // classes={[
                            //     {
                            //         done: true,
                            //         playing: false,
                            //         title: "NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                            //     },
                            //     {
                            //         done: false,
                            //         playing: true,
                            //         title: "NextJS, TailwindCSS e Typescript: #02 - Apresentação do projeto"
                            //     },
                            //     {
                            //         done: false,
                            //         playing: false,
                            //         title: "NextJS, TailwindCSS e Typescript: #03 - Apresentação do projeto"
                            //     },
                            //     {
                            //         done: false,
                            //         playing: false,
                            //         title: "NextJS, TailwindCSS e Typescript: #04 - Apresentação do projeto"
                            //     },
                            // ]}
                            playingClassId={playingClassId}

                            position={index+1}
                            open={openedIndex === index}
                            onToggle={() => setOpenedIndex(openedIndex === index ? undefined : index)}
                            onPlay={(classId) => router.push(`/player/${playingCourseId}/${classId}`)}
                            onCheck={(classId) => console.log("check", classId)}
                        />

                    </li>
                ))}

            </ol>

        </div>
    )
}
