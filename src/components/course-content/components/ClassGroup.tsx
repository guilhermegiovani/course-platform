'use client'
import { useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import { Class } from "./Class"


interface IClassGroupProps {
    title: string
    courseId: string
    classes: {
        id: string
        title: string
    }[]
}

export const ClassGroup = ({ title, classes, courseId }: IClassGroupProps) => {
    const [open, setOpen] = useState(false)


    return (
        <>
            <button
                className="flex gap-6 p-4 items-center cursor-pointer bg-paper"
                onClick={() => setOpen(!open)}
            >
                {open === true ? <MdKeyboardArrowDown size={24} /> : <MdKeyboardArrowRight size={24} />}
                {title}
            </button>

            <ol data-open={open} className="flex flex-col data-[open=false]:hidden">
                {/* open && */}
                {classes.map(({ id, title }) => (
                    <li key={id}>
                        <Class
                            title={title}
                            playerUrl={`/player/${courseId}/${id}`}
                        />
                    </li>
                ))}
            </ol>
        </>
    )
}

