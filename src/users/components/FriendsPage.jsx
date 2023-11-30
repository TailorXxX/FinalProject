import { Divider, Input, Spinner } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useUsers } from '../context/UsersContext';
import UserAvatar from './UserAvatar';

export default function FriendsPage() {
  const getUsers = useUsers();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(8);
  const initialUsers = filteredUsers.slice(0, index);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1);
  }, []);

  useEffect(() => searchUsers(searchTerm), [searchTerm, getUsers]);

  function searchUsers(searchTerm) {
    const result = getUsers.filter(
      user =>
        user.isFollowed &&
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(result);
    if (!searchTerm == '') {
      setShowLoadMoreButton(false);
    } else {
      setShowLoadMoreButton(true);
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center mt-60">
        <Spinner />
      </div>
    );
  }

  function loadMore() {
    setIndex(index + 7);
    if (index >= filteredUsers.length) {
      setShowLoadMoreButton(false);
    } else {
      setShowLoadMoreButton(true);
    }
  }

  return (
    <div className=" m-4">
      <div>
        <Input
          color="primary"
          clearable
          placeholder="Search friends..."
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="">
        {initialUsers.map(user => (
          <div
            key={user.id}
            style={{ height: '70px' }}>
            <UserAvatar
              key={user.id}
              userId={user.id}
            />
            <Divider />
          </div>
        ))}
        {showLoadMoreButton && (
          <button
            onClick={() => loadMore()}
            style={{
              display: 'block',
              margin: '20px auto',
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
            }}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
