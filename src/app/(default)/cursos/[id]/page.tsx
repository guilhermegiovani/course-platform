import { Metadata } from "next";
// import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/startcourse/StartCourse";
import clsx from "clsx";
import { CourseContent } from "@/components/course-content/CourseContent";
import { APIYouTube } from "@/shared/services/api-youtube";
import dynamic from "next/dynamic";


const CourseHeader = dynamic(
    import("@/components/course-header/CourseHeader").then(res => res.CourseHeader),
    { ssr: false }
)

interface Props {
    // params: Promise<{ id: string }>
    params: { id: string }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
    const courses = await APIYouTube.course.getAll()
    return courses.map(course => ({ id: course.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // vai na api do youtube e busca os dados necessários
    const courseDetail = await APIYouTube.course.getById((await params).id)

    return {
        title: courseDetail.title,
        description: courseDetail.description,
        openGraph: {
            locale: 'pt-BR',
            type: 'video.other',
            title: courseDetail.title,
            images: courseDetail.image,
            description: courseDetail.description,
            videos: courseDetail.classGroups
                .reduce<string[]>((previous, current) => [
                    ...previous,
                    ...current.classes.map(classItem => `https://codarse.com/player/${current.courseId}/${classItem.id}`)
                ], [])
        }
    }
};

export default async function PageCourseDetail({ params }: Props) {
    const courseDetail = await APIYouTube.course.getById((await params).id)

    const firstClass = courseDetail.classGroups.at(0)?.classes.at(0)

    return (
        <main className="mt-8 flex justify-center">
            <div
                className={clsx(
                    "w-full min-[880px]:max-w-[880px] px-2 lg:px-0",
                    "flex flex-col gap-4 md:flex-row-reverse"
                )}
            >
                {firstClass && (
                    <div className="flex-1">
                        <StartCourse
                            title={firstClass.title}
                            idCourse={courseDetail.id}
                            idClass={firstClass.id}
                            imageUrl={courseDetail.image}
                        />
                    </div>
                )}

                <div className="flex-2 flex flex-col gap-12 pb-12">
                    <CourseHeader
                        title={courseDetail.title}
                        description={courseDetail.description}
                        numberOfClasses={courseDetail.numberOfClasses}
                    />

                    <CourseContent
                        classGroups={courseDetail.classGroups}
                    />
                </div>
                {/* Detalhe do curso {id} */}
            </div>
        </main>
    )
}
