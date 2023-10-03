import { Card, CardHeader, CardBody } from '@nextui-org/react';
import UserAvatar from '../../users/components/UserAvatar';

export default function Comment({ comment, userId }) {
  return (
    <Card className="max-w-2xl border">
      <CardHeader className="flex gap-3">
        <UserAvatar userId={userId} />
      </CardHeader>

      <CardBody>
        <p>{comment}</p>
      </CardBody>

      {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui">
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}
