import { useUser } from '@clerk/clerk-react';
import { Card, CardHeader, CardBody, Divider, Image } from '@nextui-org/react';

export default function Comment({ comment, userAPI }) {
  const { user } = useUser();
  return (
    <Card className="max-w-2xl border">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={
            user.id === userAPI.id
              ? user.imageUrl
              : `https://i.pravatar.cc/150?u=${userAPI.id}`
          }
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md ">{userAPI.username}</p>
        </div>
      </CardHeader>
      <Divider />
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
