import { PlayerHeader } from "@/components/player"


interface Props {
    params: Promise<{
        courseId: string,
        classId: string
    }>
}

export default async function PagePlayer({ params }: Props) {
    const { courseId, classId } = await params

    return (
        <>
            <PlayerHeader
                title="NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                subtitle="🔔 NextJS, TailwindCSS e Typescript"
            />

            Player / {courseId} / {classId}
        </>
    )
}