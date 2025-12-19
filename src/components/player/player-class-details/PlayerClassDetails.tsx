'use client'
import { useRouter } from "next/navigation"
import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer"
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup"
import { useMemo } from "react"

interface IPlayerClassDetailsProps {
    playingClassId: string
    playingCourseId: string
    classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[]
}

export const PlayerClassDetails = ({ playingClassId, playingCourseId, classGroups }: IPlayerClassDetailsProps) => {

    const router = useRouter()

    const nextClassId = useMemo(() => {
        const classes = classGroups.flatMap(classGroup => classGroup.classes)

        const currentClassIndex = classes.findIndex(classItem => classItem.classId === playingClassId)

        const nextClassIndex = currentClassIndex + 1

        if (nextClassIndex === classes.length) {
            return undefined
        }

        return classes[nextClassIndex].classId

    }, [classGroups, playingClassId])

    return (
        <div className="flex-1">
            <div className="flex-1 aspect-video">
                <PlayerVideoPlayer
                    videoId='bP47qRVRqQs'
                    onPlayNext={() => nextClassId ? router.push(`/player/${playingCourseId}/${nextClassId}`) : {}}
                />
            </div>

            <div>
                Descrição
            </div>
        </div>
    )
}
