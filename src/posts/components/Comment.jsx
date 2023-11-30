import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from '@nextui-org/react';
import { useState } from 'react';
import HeartButton from '../../layout/HeartButton';
import UserAvatar from '../../users/components/UserAvatar';

export default function Comment({
  comment,
  myUserId,
  editMyComment,
  deleteMyComment,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [commentToEdit, setCommentToEdit] = useState(comment);

  function handleClick() {
    editMyComment(commentToEdit);
    setIsEditable(!isEditable);
  }

  return (
    <Card className="max-w-2xl border bg-gray-600 bg-opacity-25 backdrop-blur-sm backdrop-filter">
      <CardHeader className="flex gap-3">
        <UserAvatar userId={comment.user.id} />
      </CardHeader>

      <CardBody>
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <Input
              className=" font-semibold sticky border border-y-transparent rounded-2xl w-auto active:bg-secondary-100"
              color="secondary"
              size="md"
              type="text"
              name="post-title"
              defaultValue={comment.body}
              onChange={e => {
                setCommentToEdit({ ...commentToEdit, body: e.target.value });
              }}
              placeholder="Give a title..."
            />
            <Button onClick={handleClick}>Edit</Button>
          </div>
        ) : (
          `${comment.body}`
        )}
      </CardBody>

      <CardFooter className="flex gap-3">
        <HeartButton userFromListId={comment.user.id} />
        {comment.user.id == myUserId ? (
          <div className="flex gap-3">
            <Button
              className={
                !isEditable
                  ? 'bg-transparent hover:border border-green-700 hover:text-green-700'
                  : 'bg-transparent hover:border border-yellow-700 hover:text-yellow-700'
              }
              isIconOnly
              onClick={() => setIsEditable(!isEditable)}>
              <i className="bi bi-pencil-square"></i>
            </Button>
            <Button
              isIconOnly
              className="bg-transparent w-0 hover:border border-red-700 hover:text-red-700"
              color=""
              aria-label="Delete"
              onClick={() => deleteMyComment(comment)}>
              <i className="bi bi-trash"></i>
            </Button>
          </div>
        ) : (
          ''
        )}
      </CardFooter>
    </Card>
  );
}
