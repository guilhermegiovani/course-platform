import { Comment } from "./Comment"

interface ICommentsProps {}

export const Comments = ({ }: ICommentsProps) => {

    return (
        <div className="flex flex-col gap-2">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}