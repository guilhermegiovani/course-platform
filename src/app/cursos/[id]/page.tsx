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

    console.log(id)

    return (
        <main className="mt-8 flex justify-center">
            Detalhe do curso {id}
        </main>
    )
}
