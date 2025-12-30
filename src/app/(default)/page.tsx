import { KeepWatching } from "@/components/keepwatching/KeepWatching";
import { Metadata } from "next";

import { APIYouTube } from "@/shared/services/api-youtube";
import { Section } from "@/components/section/Section";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial"
};

export default async function PageHome() {
  const courses = await APIYouTube.course.getAll()


  return (
    <main className="mt-8 flex justify-center">

      <div className="flex flex-col gap-4 w-full min-[880px]:max-w-[880px]">

        <KeepWatching />


        <Section
          title="Veja mais cursos"
          variant="h-list"
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
  );
}
