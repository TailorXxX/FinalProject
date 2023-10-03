import { User } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { getUserById } from '../user.service';
import { useEffect, useState } from 'react';

function UserAvatar({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    const fetchedUser = await getUserById(userId);
    setUser(fetchedUser);
  }
  return (
    <Link to="">
      <User
        name={user?.firstName}
        avatarProps={{
          src: user?.image,
          isBordered: true,
          color: 'primary',
        }}
      />
    </Link>
  );
}

export default UserAvatar;
