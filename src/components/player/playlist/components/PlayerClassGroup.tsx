'use client'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import { PlayerClass, IPlayerClassProps } from "./PlayerClass"
import clsx from "clsx"


export interface IPlayerClassGroupProps {
    title: string
    open: boolean
    position: number
    playingClassId: string
    classes: (Pick<IPlayerClassProps, 'title' | 'done'> & { classId: string })[]

    onToggle: () => void
    onPlay: (classId: string) => void
    onCheck: (classId: string) => void
}

export const PlayerClassGroup = ({ classes, position, title, open, playingClassId, onToggle, onPlay, onCheck }: IPlayerClassGroupProps) => {


    return (

        <div className="flex flex-col">

            <button
                className="flex gap-2 p-4 bg-paper items-center cursor-pointer active:opacity-80"
                onClick={onToggle}
            >
                <div
                    className={clsx(
                        "bg-background h-12 w-12 rounded-full",
                        "flex items-center justify-center"
                    )}
                >
                    {position}
                </div>

                <div className="flex flex-col flex-1 items-start">
                    <span className="font-bold line-clamp-1 text-start">{title}</span>
                    <span className="text-sm font-light line-clamp-1 text-start">
                        {classes.filter((classItem) => classItem.done).length}/{classes.length} aulas
                    </span>
                </div>

                {open ? <MdKeyboardArrowDown size={28} /> : <MdKeyboardArrowRight size={28} />}
            </button>

            <ol
                data-open={open}
                className="flex flex-col data-[open=false]:hidden"
            >

                {classes.map((classItem) => (

                    <li key={classItem.title}>
                        <PlayerClass
                            {...classItem}
                            playing={classItem.classId === playingClassId}
                            onCheck={() => onCheck(classItem.classId)}
                            onPlay={() => onPlay(classItem.classId)}
                        />
                    </li>
                ))}

            </ol>

        </div>
    )
}