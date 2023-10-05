import { useEffect, useState } from 'react';
import { useUsers } from '../context/UsersContext';
import { Input } from '@nextui-org/react';
import UserAvatar from './UserAvatar';

export default function FriendsPage() {
  const getUsers = useUsers();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const result = getUsers.filter(
      user =>
        user.isFollowed &&
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(result);
  }, [searchTerm, getUsers]);

  return (
    <div>
      <div>
        <Input
          clearable
          placeholder="Search friends..."
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-col m-4 gap-4">
        {filteredUsers.map(user => (
          <div key={user.id}>
            {' '}
            <UserAvatar
              key={user.id}
              userId={user.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
