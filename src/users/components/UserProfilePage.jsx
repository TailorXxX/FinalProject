import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useUserById } from '../context/UsersContext';

function UserProfilePage() {
  const { userId } = useParams();
  const getUserById = useUserById();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserById(Number(userId)));
  }, []);

  return (
    <>
      <div>{user?.id} asdasdasd</div>
      <div>{user?.firstName}</div>
    </>
  );
}

export default UserProfilePage;
