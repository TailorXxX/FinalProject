import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useUserById } from '../context/UsersContext';

function UserProfilePage() {
  const { userId } = useParams();
  const getUserById = useUserById();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserById(Number(userId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="profile-page bg-gray-900 bg-opacity-25 backdrop-blur-sm backdrop-filter">
      <div>{user?.firstName}</div>
    </div>
  );
}

export default UserProfilePage;
