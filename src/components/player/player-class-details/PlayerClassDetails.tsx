'use client'
import { useRouter } from "next/navigation"
import { PlayerVideoPlayer } from "./components/PlayerVideoPlayer"
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup"
import { useMemo } from "react"
import * as Tabs from "@radix-ui/react-tabs";
import clsx from "clsx"
import { CourseHeader } from "@/components/course-header/CourseHeader"

interface IPlayerClassDetailsProps {
    course: {
        title: string
        description: string
        numberOfClasses: number
    }

    playingClassId: string
    playingCourseId: string
    classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[]
}

export const PlayerClassDetails = ({ playingClassId, playingCourseId, classGroups, course }: IPlayerClassDetailsProps) => {

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
        <div className="flex-1 overflow-auto pb-10">
            <div className="flex-1 aspect-video">
                <PlayerVideoPlayer
                    videoId='bP47qRVRqQs'
                    onPlayNext={() => nextClassId ? router.push(`/player/${playingCourseId}/${nextClassId}`) : {}}
                />
            </div>

            <Tabs.Root defaultValue="class-details">
                <Tabs.List className="flex gap-4">
                    <Tabs.Trigger
                        value="class-details"
                        className={clsx(
                            "p-2 flex items-center justify-center",
                            "border-b-4 border-transparent data-[state=active]:border-primary cursor-pointer"
                        )}
                    >
                        Visão geral
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="class-comments"
                        className={clsx(
                            "p-2 flex items-center justify-center",
                            "border-b-4 border-transparent data-[state=active]:border-primary cursor-pointer"
                        )}
                    >
                        Comentários
                    </Tabs.Trigger>

                    <Tabs.Trigger
                        value="course-details"
                        className={clsx(
                            "p-2 flex items-center justify-center",
                            "border-b-4 border-transparent data-[state=active]:border-primary cursor-pointer"
                        )}
                    >
                        Visão geral do curso
                    </Tabs.Trigger>
                </Tabs.List>

                <hr className="border-paper" />

                <Tabs.Content value="class-details">
                    Detalhes da aula
                </Tabs.Content>

                <Tabs.Content value="class-comments">
                    Comentários da aula
                </Tabs.Content>

                <Tabs.Content value="course-details">
                    <CourseHeader
                        title={course.title}
                        description={course.description}
                        numberOfClasses={course.numberOfClasses}
                    />
                </Tabs.Content>
            </Tabs.Root>
        </div>
    )
}
