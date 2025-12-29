import Image from "next/image"
import { MdArrowDropDown, MdThumbUp } from "react-icons/md"


interface ICommentProps { }

export const Comment = ({ }: ICommentProps) => {

    return (
        <div className="flex gap-2 items-start">
            <Image
                width={40}
                height={40}

                draggable={false}
                className="rounded-full"

                // src={}
            />

            <div className="bg-paper flex-1 flex flex-col gap-4 p-2 rounded-[4px]">
                <div className="flex gap-2 items-center">
                    <span className="font-bold">
                        Username
                    </span>

                    <span
                        className="font-extrabold text-xs opacity-50"
                    >
                        25/07/2025 às 15:25
                    </span>
                </div>

                <p>Comment</p>

                <div className="flex gap-4">
                    <div className="flex gap-1 items-center">
                        <MdThumbUp />
                        <span>5</span>
                    </div>

                    <button className="flex gap-1 items-center text-primary cursor-pointer">
                        <MdArrowDropDown size={24} />
                        <span>Ver resposta (5)</span>
                    </button>
                </div>
            </div>
        </div>
    )
}