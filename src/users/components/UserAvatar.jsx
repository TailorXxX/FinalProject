import { User } from '@nextui-org/react';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useUserById } from '../context/UsersContext';

function UserAvatar({ userId }) {
  const getUserById = useUserById();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(getUserById(userId));

  return (
    <Link to={`/userprofile/${userId}`}>
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
