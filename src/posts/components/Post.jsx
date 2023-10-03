import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from '@nextui-org/react';

import PostsComments from './PostsComments';
import UserAvatar from '../../users/components/UserAvatar';
import { useFollowButton, useUserById } from '../../users/context/UsersContext';
import { useState } from 'react';

export default function Post({ post }) {
  const getUserById = useUserById();
  const [user, setUser] = useState(getUserById(post.userId));
  const toggleFollowState = useFollowButton();

  function onFollowButtonClick(user) {
    const updatedUser = toggleFollowState(user);
    setUser(updatedUser);
  }

  return (
    <Card
      key={post.id}
      className="w-96 mt-2 border">
      <CardHeader className="justify-between">
        <div className="flex">
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
      <CardBody className="px-3 py-0 overflow-hidden text-small text-default-400">
        <p>{post.body}</p>
        <span className="pt-2 text-xs font-bold">
          {post.tags.map(tag => `#${tag} `)}
          <span
            className="py-2"
            aria-label="computer"
            role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Follow</p>
        </div>
        <div className="flex gap-1">
          <PostsComments
            postId={post.id}
            postTitle={post.title}
            postUser={user}
          />
        </div>
      </CardFooter>
    </Card>
  );
}
