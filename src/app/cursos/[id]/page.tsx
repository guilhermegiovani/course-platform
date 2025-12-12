import { Metadata } from "next";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/startcourse/StartCourse";
import clsx from "clsx";
import { CourseContent } from "@/components/course-content/CourseContent";

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

                <div className="flex-2 flex flex-col gap-12 pb-12">
                    <CourseHeader
                        title="🎩 Curso de Figma para DEVs"
                        description="Os melhores desenvolvedores do mercado fazem questão que estar preparados para os mais diversos tipos de desafios nas suas carreiras. A habilidade de desenvolver protótipos ou mesmo de entender como um protótipo foi desenvolvido pode ser um baita diferencial para você. Nesse curso que te mostrar de forma simples e prática como desenvolver protótipos no figma, vamos aproveitar certos conhecimentos de programação ao decorrer do curso. Tenho certeza que esse tem o potencial de ser o melhor curso de figma para desenvolvedores disponíveis gratuitamente. #CODARSE"
                        numberOfClasses={48}
                    />

                    <CourseContent
                        classGroups={[
                            {
                                title: "Introdução e apresentação do projeto",
                                courseId: "123",
                                classes: [
                                    { id: '234', title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto' },
                                    { id: '235', title: 'NextJS, TailwindCSS e Typescript: #01 - Apresentação do protótipo' }
                                ]
                            },
                            {
                                title: "Primeiras configuração necessárias",
                                courseId: "123",
                                classes: [
                                    { id: '234', title: 'NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto' },
                                    { id: '235', title: 'NextJS, TailwindCSS e Typescript: #01 - Apresentação do protótipo' }
                                ]
                            },
                        ]}
                    />
                </div>
                {/* Detalhe do curso {id} */}
            </div>
        </main>
    )
}
