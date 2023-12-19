import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from '@nextui-org/react';

import { useUser } from '@clerk/clerk-react';
import { useEffect, useRef, useState } from 'react';
import FollowButton from '../../layout/FollowButton';
import HeartButton from '../../layout/HeartButton';
import UserAvatar from '../../users/components/UserAvatar';
import { useUserById } from '../../users/context/UsersContext';
import PostsComments from './PostsComments';

export default function Post({ post, editMyPost, deleteMyPost }) {
  const getUserById = useUserById();
  const [userFromList, setUserFromList] = useState(null);
  const { user } = useUser();

  const titleRef = useRef();
  const bodyRef = useRef();

  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchedUser = getUserById(post.userId);
    if (fetchedUser) {
      setUserFromList(fetchedUser);
    }
  }, [getUserById, post.userId]);

  async function handleSubmit(e) {
    e.preventDefault();
    const postToUpdate = {
      ...post,
      title: titleRef.current?.value,
      body: bodyRef.current?.value,
    };
    await editMyPost(postToUpdate);
    setIsEditable(false);
  }

  return (
    <Card
      key={post.id}
      className="shadow-2xl w-full my-2 bg-gradient-to-r from-primary-background to-primary-100 bg-opacity-25 backdrop-blur-sm backdrop-filter">
      <CardHeader className="flex justify-between ">
        <div className="flex-col">
          <UserAvatar userId={post.userId} />
        </div>
        {userFromList?.id != user.id ? (
          <FollowButton userFromList={userFromList} />
        ) : (
          ''
        )}
      </CardHeader>
      <CardBody className="px-3 py-0 overflow-hidden text-small ">
        {isEditable ? (
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex items-center justify-start gap-3">
            <div className="flex flex-col">
              <Input
                className="font-semibold sticky border border-y-transparent rounded-2xl w-auto active:bg-secondary-100"
                color="secondary"
                size="md"
                type="text"
                name="post-title"
                ref={titleRef}
                defaultValue={post.title}
                placeholder="Give a title..."
              />

              <Divider />

              <Input
                className=" font-semibold sticky border border-y-transparent rounded-2xl w-auto active:bg-secondary-100"
                color="secondary"
                size="md"
                type="text"
                name="post-body"
                ref={bodyRef}
                defaultValue={post.body}
                placeholder="Give a description..."
              />
            </div>

            <Button
              isIconOnly
              type="submit"
              className=" bg-secondary-100 self-center w-20  border hover:bg-primary-200">
              Edit
            </Button>
          </form>
        ) : (
          <div className="flex flex-col">
            <p className="mb-2 text-lg">{post.title}</p>
            <Divider />
            <p className="mb-2 text-lg">{post.body}</p>
          </div>
        )}
      </CardBody>
      <CardFooter className="flex justify-between gap-3 ">
        <div className="flex gap-3">
          <div className="flex items-center justify-center gap-1">
            <HeartButton userFromListId={userFromList?.id} />
          </div>

          <div className="flex items-center justify-center gap-1">
            <PostsComments
              postId={post.id}
              postTitle={post.title}
              postBody={post.body}
              postUser={userFromList}
            />
          </div>

          {user.id === userFromList?.id ? (
            <div className="flex gap-3">
              <Button
                isIconOnly
                className={
                  !isEditable
                    ? 'bg-transparent hover:border border-green-700 hover:text-green-700'
                    : 'bg-transparent hover:border border-yellow-700 hover:text-yellow-700'
                }
                color=""
                aria-label="Delete"
                onClick={() => setIsEditable(!isEditable)}>
                <i className="bi bi-pencil-square"></i>
              </Button>
              <Button
                isIconOnly
                className="bg-transparent w-0 hover:border border-red-700 hover:text-red-700"
                color=""
                aria-label="Delete"
                onClick={() => deleteMyPost(post)}>
                <i className="bi bi-trash"></i>
              </Button>
            </div>
          ) : (
            ''
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
