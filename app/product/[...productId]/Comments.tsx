import Image from 'next/image';
import CommentFilterSelect from './CommentFilterSelect';
import { Button } from '@/components/ui/button';

type CommentProps = {
    comments: Comment[];
};
const Comments = ({ comments }: CommentProps) => {
    console.log(comments);
    const numComments = comments.length;
    return (
        <section>
            <div className="flex justify-between mb-10 items-center">
                <h3 className="font-medium text-xl">{numComments} Review</h3>
                <div className="w-[256px]">
                    <CommentFilterSelect />
                </div>
            </div>
            {comments.map((comment) => (
                <div key={comment.id} className="flex gap-10 p-6 border-b">
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1715876234545-88509db72eb3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt={comment.user.username}
                        className="size-[60px] rounded-full bg-neutral-200"
                        width={100}
                        height={100}
                    ></Image>
                    <div className="flex flex-col gap-1">
                        <h4 className="font-semibold text-xl">{comment.user.username}</h4>
                        <p className="font-base">{comment.body}</p>
                        <div className="text-xl">
                            <Button variant="ghost" className="text-xs">
                                Like
                            </Button>
                            <Button variant="ghost" className="text-xs">
                                Reply
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};
export default Comments;
