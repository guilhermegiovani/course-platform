import { Metadata } from "next";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/startcourse/StartCourse";
import clsx from "clsx";
import { Class } from "@/components/course-content/components/Class";

interface Props {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // vai na api do youtube e busca os dados necessários

    const { id } = await params

    return {
        title: id
    }
};

export default async function PageCourseDetail({ params }: Props) {
    const { id } = await params

    return (
        <main className="mt-8 flex justify-center">
            <div
                className={clsx(
                    "w-full min-[880px]:max-w-[880px] px-2 lg:px-0",
                    "flex flex-col gap-4 md:flex-row-reverse"
                )}
            >
                <div className="flex-1">
                    <StartCourse
                        title="🎩 Curso de Figma para DEVs"
                        idCourse="1"
                        idClass="1"
                        imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                    />
                </div>

                <div className="flex-2">
                    <CourseHeader />
                   
                    <Class
                        title="NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
                        playerUrl="/player/{courseId}/{classId}"
                    />
                </div>
                {/* Detalhe do curso {id} */}
            </div>
        </main>
    )
}
