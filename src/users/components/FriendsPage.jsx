import { Divider, Input, Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useUsers } from '../context/UsersContext';
import UserAvatar from './UserAvatar';

export default function FriendsPage() {
  const getUsers = useUsers();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (e.g., 2 seconds) to see the spinner
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const result = getUsers.filter(
      user =>
        user.isFollowed &&
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(result);
  }, [searchTerm, getUsers]);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-60">
        <Spinner />
      </div>
    );
  }

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
            <UserAvatar
              key={user.id}
              userId={user.id}
            />
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}
