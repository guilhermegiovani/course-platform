import { Comment, ICommentProps } from "./Comment"

interface ICommentsProps {
    comments: ICommentProps[]
}

export const Comments = ({ comments }: ICommentsProps) => {

    return (
        <div className="flex flex-col gap-2">
            {comments.map(comment => (
                <Comment
                    key={comment.publishDate}
                    {...comment}
                    // author={{
                    //     image: 'teste',
                    //     userName: '@GuilhermeNobreDev' // url image
                    // }}
                    // content='My comment'
                    // likesCount={5}
                    // publishDate='2025-06-10T02:21:46Z'
                    // replies={comments}
                />

            ))}
        </div>
    )
}