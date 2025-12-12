

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
            Player / {courseId} / {classId}
        </>
    )
}