import { User } from '@nextui-org/react';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useUserById } from '../context/UsersContext';

function UserAvatar({ userId }) {
  const getUserById = useUserById();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchedUser = getUserById(userId);
    if (fetchedUser) {
      setUser(fetchedUser);
    }
  }, [userId, getUserById]);

  return (
    <Link to={`/userprofile/${userId}`}>
      <div className="flex m-4 ">
        <User
          className="flex gap-4 font-bold"
          name={`${user?.firstName} ${user?.lastName}`}
          avatarProps={{
            src: user?.image,
            isBordered: true,
            color: 'primary',
            size: 'lg',
          }}
        />
      </div>
    </Link>
  );
}

export default UserAvatar;
