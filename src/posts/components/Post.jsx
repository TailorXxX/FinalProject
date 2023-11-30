import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from '@nextui-org/react';

import { useUser } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import FollowButton from '../../layout/FollowButton';
import HeartButton from '../../layout/HeartButton';
import UserAvatar from '../../users/components/UserAvatar';
import { useUserById } from '../../users/context/UsersContext';
import PostsComments from './PostsComments';

export default function Post({ post, deleteMyPost }) {
  const getUserById = useUserById();
  const [userFromList, setUserFromList] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchedUser = getUserById(post.userId);
    if (fetchedUser) {
      setUserFromList(fetchedUser);
    }
  }, [getUserById, post.userId]);

  return (
    <>
      <Card
        key={post.id}
        className="max-w my-2 bg-gradient-to-r from-primary-background to-primary-100 bg-opacity-25 backdrop-blur-sm backdrop-filter">
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
          <p className="mb-2 text-lg">{post.title}</p>
          <Divider />
          <p className="mt-3 text-medium">{post.body}</p>
        </CardBody>
        <CardFooter className="flex justify-between gap-3 ">
          <div className="flex gap-1">
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
              <div>
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
    </>
  );
}
