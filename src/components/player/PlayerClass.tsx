'use client'
import { MdCheckCircle, MdCircle, MdPlayCircleOutline } from "react-icons/md"


interface IPlayerClassProps {
    title: string
    playing: boolean
    done: boolean

    onPlay: () => void
    onCheck: () => void
}

export const PlayerClass = ({ title, playing, done, onPlay, onCheck }: IPlayerClassProps) => {


    return (

        <button
            className="flex gap-6 p-4 items-center cursor-pointer"
            onClick={() => onPlay()}
        >
            {!done && (
                <div
                    className="group cursor-pointer"
                    onClick={e => {
                        e.stopPropagation()
                        onCheck()
                    }}
                >
                    <MdPlayCircleOutline
                        size={24}
                        className="min-w-6 group-hover:hidden"
                    />

                    <MdCircle
                        size={24}
                        className="min-w-6 hidden group-hover:block"
                    />
                </div>
            )}

            {done && (
                <MdCheckCircle
                    size={24}
                    className="min-w-6 text-green-400"
                />
            )}

            <div className="flex flex-col gap-1 items-start">
                <p
                    data-done={done}
                    className="line-clamp-2 text-start data-[done=true]:text-green-400"
                >
                    {title}
                </p>

                {playing && (
                    <span className="bg-blue-500 px-2 py-1 rounded-full leading-4">
                        Reproduzindo
                    </span>
                )}
            </div>
        </button>
    )
}