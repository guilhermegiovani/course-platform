'use client'
import { IPlayerClassGroupProps } from "../playlist/components/PlayerClassGroup"
import { PlayerVideoPlayer, PlayerClassHeader, IPlayerVideoPlayerRef } from "@/components/player"
// import { CourseHeader } from "@/components/course-header/CourseHeader"
import * as Tabs from "@radix-ui/react-tabs";
import { useRouter } from "next/navigation"
import { useMemo, useRef } from "react"
import clsx from "clsx"
import { Comments } from "./components/comments/Comments";
import dynamic from "next/dynamic";


const CourseHeader = dynamic(
    import("@/components/course-header/CourseHeader").then(res => res.CourseHeader),
    { ssr: false }
)

interface IPlayerClassDetailsProps {
    course: {
        title: string
        description: string
        numberOfClasses: number
    }

    classItem: {
        title: string
        description: string
    }

    playingClassId: string
    playingCourseId: string
    classGroups: Pick<IPlayerClassGroupProps, 'classes' | 'title'>[]
}

export const PlayerClassDetails = ({ playingClassId, playingCourseId, classGroups, course, classItem }: IPlayerClassDetailsProps) => {
    const router = useRouter()

    const playerVideoPlayerRef = useRef<IPlayerVideoPlayerRef>(null)

    // playerVideoPlayerRef.current?.setProgress

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

            {/* <button onClick={() => playerVideoPlayerRef.current?.setProgress(120)}>
                Avançar
            </button> */}

            <div className="flex-1 aspect-video">
                <PlayerVideoPlayer
                    ref={playerVideoPlayerRef}
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

                <hr className="border-paper mb-2" />

                <Tabs.Content value="class-details" className="px-2">
                    <PlayerClassHeader
                        title={classItem.title}
                        description={classItem.description}
                        onTimeClick={seconds => playerVideoPlayerRef.current?.setProgress(seconds)}
                    />
                </Tabs.Content>

                <Tabs.Content value="class-comments" className="px-2">
                    <Comments
                        comments={[
                            {
                                content: 'My comment',
                                likesCount: 15,
                                publishDate: '2025-06-10T02:21:46Z',
                                author: {
                                    image: 'teste',
                                    userName: '@GuilhermeGiovaniDev'
                                },
                                replies: undefined,
                            },
                            {
                                content: 'My comment',
                                likesCount: 15,
                                publishDate: '2025-06-10T02:21:46Z',
                                author: {
                                    image: 'teste',
                                    userName: '@GuilhermeGiovaniDev'
                                },
                                replies: [
                                    {
                                        content: 'My reply',
                                        likesCount: 15,
                                        publishDate: '2025-06-10T02:21:46Z',
                                        author: {
                                            image: 'teste',
                                            userName: '@GuilhermeGiovaniDev'
                                        },
                                        replies: undefined,
                                    },
                                    {
                                        content: 'My reply',
                                        likesCount: 15,
                                        publishDate: '2025-06-10T02:21:46Z',
                                        author: {
                                            image: 'teste',
                                            userName: '@GuilhermeGiovaniDev'
                                        },
                                        replies: undefined,
                                    },
                                ]
                            },
                        ]}
                    />
                </Tabs.Content>

                <Tabs.Content value="course-details" className="px-2">
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
