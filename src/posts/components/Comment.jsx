import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import HeartButton from '../../layout/HeartButton';
import UserAvatar from '../../users/components/UserAvatar';

export default function Comment({ comment, userId }) {
  return (
    <Card className="max-w-2xl border bg-gray-600 bg-opacity-25 backdrop-blur-sm backdrop-filter">
      <CardHeader className="flex gap-3">
        <UserAvatar userId={userId} />
      </CardHeader>

      <CardBody>
        <p>{comment}</p>
      </CardBody>

      <CardFooter>
        <HeartButton />
      </CardFooter>
    </Card>
  );
}
