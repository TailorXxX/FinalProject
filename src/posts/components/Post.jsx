import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';

import { useState } from 'react';
import HeartButton from '../../layout/HeartButton';
import RandomDate from '../../layout/RandomDate';
import UserAvatar from '../../users/components/UserAvatar';
import { useFollowButton, useUserById } from '../../users/context/UsersContext';
import PostsComments from './PostsComments';

export default function Post({ post }) {
  const getUserById = useUserById();
  const [user, setUser] = useState(getUserById(post.userId));
  const toggleFollowState = useFollowButton();

  function onFollowButtonClick(user) {
    const updatedUser = toggleFollowState(user);
    setUser(updatedUser);
  }

  return (
    <>
      <Card
        key={post.id}
        className="max-w my-2 bg-gray-600 bg-opacity-25 backdrop-blur-sm backdrop-filter">
        <CardHeader className="justify-between">
          <div className="flex-col">
            <UserAvatar userId={post.userId} />
          </div>
          <Button
            className={
              user?.isFollowed
                ? 'bg-transparent text-foreground border-default-200'
                : ''
            }
            color="primary"
            radius="full"
            size="sm"
            variant={user?.isFollowed ? 'bordered' : 'solid'}
            onPress={() => onFollowButtonClick(user)}>
            {user?.isFollowed ? 'Unfollow' : 'Follow'}
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 overflow-hidden text-small text-default">
          <p>{post.body}</p>
          <span className="pt-2 text-xs font-bold ">
            {post.tags.map(tag => `#${tag} `)}
          </span>
        </CardBody>
        <CardFooter className="flex justify-between gap-3 ">
          <div className="flex gap-1">
            <div className="flex items-center justify-center gap-1">
              <HeartButton />
            </div>
            <div className="flex items-center justify-center gap-1 ">
              <span className="font-semibold text-default text-xs">
                {Math.floor(Math.random() * 100)}.
                {Math.floor(Math.random() * 10)}K
              </span>
              <span className="font-semibold text-default text-xs">Follow</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <PostsComments
                postId={post.id}
                postTitle={post.title}
                postUser={user}
              />
            </div>
          </div>

          <div className="flex">
            <RandomDate />
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
