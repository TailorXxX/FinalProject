import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';

import { useState } from 'react';
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
    <Card
      key={post.id}
      className="max-w mt-2 border bg-gray-600 bg-opacity-25 backdrop-blur-sm backdrop-filter">
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
      <CardBody className="px-3 py-0 overflow-hidden text-small text-default">
        <p>{post.body}</p>
        <span className="pt-2 text-xs font-bold ">
          {post.tags.map(tag => `#${tag} `)}
          <span
            className="py-2"
            aria-label="computer"
            role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3 font-semibold text-default text-small">
        <div className="flex gap-1">
          <p>4</p>
          <p>Following</p>
        </div>
        <div className="flex gap-1">
          <p>97.1K</p>
          <p>Follow</p>
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
