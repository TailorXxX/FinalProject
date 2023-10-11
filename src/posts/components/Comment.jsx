import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';
import EditComment from '../../layout/EditComment';
import HeartButton from '../../layout/HeartButton';
import UserAvatar from '../../users/components/UserAvatar';

export default function Comment({
  comment,
  myUserId,
  editMyComment,
  deleteMyComment,
}) {
  return (
    <Card className="max-w-2xl border bg-gray-600 bg-opacity-25 backdrop-blur-sm backdrop-filter">
      <CardHeader className="flex gap-3">
        <UserAvatar userId={comment.user.id} />
      </CardHeader>

      <CardBody>
        <p>{comment.body}</p>
      </CardBody>

      <CardFooter>
        <HeartButton />
        {comment.user.id == myUserId ? (
          <div>
            <EditComment
              comment={comment}
              editMyComment={editMyComment}
            />
            <Button
              color="danger"
              aria-label="Delete"
              onClick={() => deleteMyComment(comment)}>
              Delete
            </Button>
          </div>
        ) : (
          ''
        )}
      </CardFooter>
    </Card>
  );
}
