import { useUsers, useFollowButton } from '../context/UsersContext';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';
import Page from '../../layout/Page';

export default function UsersPosts() {
  const users = useUsers();
  const onFollowButtonClick = useFollowButton();
  return (
    <Page>
      {users.map(user => (
        <Card
          key={user.login.uuid}
          className="w-max mt-2 border">
          <CardHeader className="justify-between">
            <div className="flex">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src={user.picture.thumbnail}
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600 p-2">
                  {user.name.first}
                </h4>
              </div>
            </div>
            <Button
              className={
                user.isFollowed
                  ? 'bg-transparent text-foreground border-default-200'
                  : ''
              }
              color="primary"
              radius="full"
              size="sm"
              variant={user.isFollowed ? 'bordered' : 'solid'}
              onPress={() => onFollowButtonClick(user)}>
              {user.isFollowed ? 'Unfollow' : 'Follow'}
            </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 overflow-hidden text-small text-default-400">
            <p>
              Frontend developer and UI/UX enthusiast. Join me on this coding
              adventure!
            </p>
            <span className="pt-2">
              #FrontendWith{user.name.first}
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
              <p className="text-default-400 text-small">Followers</p>
            </div>
          </CardFooter>
          <div>{user.comments}</div>
        </Card>
      ))}
    </Page>
  );
}
