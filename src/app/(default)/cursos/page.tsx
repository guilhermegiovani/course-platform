import { Section } from "@/components/section/Section";
import { APIYouTube } from "@/shared/services/api-youtube";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CodarSe - Todos os cursos"
};

export default async function PageCursos() {
    const courses = await APIYouTube.course.getAll()

    return (
        <main className="mt-8 flex justify-center">

            <div className="w-full min-[880px]:max-w-[880px]">
                <Section
                    title="Todos os cursos"
                    variant="grid"
                    items={
                        courses.map(course => ({
                            title: course.title,
                            image: course.image,
                            href: `/cursos/${course.id}`,
                            description: course.description
                        }))
                    }
                />
            </div>

        </main>
    )
}
