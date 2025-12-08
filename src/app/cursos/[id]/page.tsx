import { CourseHeader } from "@/components/course-header/CourseHeader";
import { Metadata } from "next";

interface Props {
    params: Promise<{id: string}>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // vai na api do youtube e busca os dados necessários

    const {id} = await params
    
    return {
        title: id
    }
};

export default async function PageCourseDetail({ params }: Props) {
    const {id} = await params

    return (
        <main className="mt-8 flex justify-center">
            <div className="w-full min-[880px]:max-w-[880px]">
                <CourseHeader />
                {/* Detalhe do curso {id} */}
            </div>
        </main>
    )
}
