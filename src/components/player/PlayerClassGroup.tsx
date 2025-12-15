'use client'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md"
import { PlayerClass, IPlayerClassProps } from "./PlayerClass"
import clsx from "clsx"


interface IPlayerClassGroupProps {
    title: string
    open: boolean
    position: number
    classes: Omit<IPlayerClassProps, 'onPlay' | 'onCheck'>[]

    onToggle: () => void
}

export const PlayerClassGroup = ({ classes, position, title, open, onToggle }: IPlayerClassGroupProps) => {


    return (

        <div className="flex flex-col">

            <button
                className="flex gap-2 p-4 bg-paper items-center cursor-pointer"
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
                            // title={classItem.title}
                            // playing={classItem.playing}
                            // done={classItem.done}
                            onCheck={() => console.log("check")}
                            onPlay={() => console.log("play")}
                        />
                    </li>
                ))}

            </ol>

        </div>
    )
}