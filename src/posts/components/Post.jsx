import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import { getUserById } from '../../users/user.service';
import { useEffect, useState } from 'react';
import PostsComments from './PostsComments';

export default function Post({ post }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(post.userId);
  }, [post.userId]);

  async function fetchUserById(id) {
    const fetchedUser = await getUserById(id);
    setUser(fetchedUser);
  }

  const toggleFollowState = user => {
    return { ...user, isFollowed: !user.isFollowed };
  };

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
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={user?.image}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600 p-2">
              {user?.firstName}
            </h4>
          </div>
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
        <div>
          <PostsComments
            postId={post.id}
            postTitle={post.title}
            userAPI={user}
          />
        </div>
      </CardFooter>
    </Card>
  );
}
