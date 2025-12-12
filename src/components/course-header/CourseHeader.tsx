'use client'

import { MdShare } from "react-icons/md"
import { CollapsibleText } from "./components/CollapsibleText"
import clsx from "clsx"
import { CopyContent } from "./components/CopyContent"


interface ICourseHeaderProps {
    title: string
    description: string
    numberOfClasses: number
}


export const CourseHeader = ({ title, description, numberOfClasses }: ICourseHeaderProps) => {

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-extrabold text-2xl">
                {title}
            </h1>

            <CollapsibleText numberOfLinesWhenClosed={3}>
                {description}
            </CollapsibleText>

            <div className="flex gap-3 items-center">
                <CopyContent title="Copie o conteúdo abaixo" content={window.location.href}>
                    <button className={clsx(
                        "py-2 px-4 bg-paper rounded-full cursor-pointer",
                        "flex items-center gap-2"
                    )}>
                        <MdShare />
                        Compartilhar
                    </button>
                </CopyContent>

                <span>{numberOfClasses} aulas</span>
            </div>
        </div>
    )
}