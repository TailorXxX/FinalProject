import { createContext, useContext, useEffect, useState } from 'react';
import { getComments, getUsersWithCount } from '../user.service';

const UsersListContext = createContext();
const SetIsFollowedContext = createContext();

export const useUsers = () => useContext(UsersListContext);
export const useFollowButton = () => useContext(SetIsFollowedContext);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const users = await getUsersWithCount();
    const comments = await getComments(Math.floor(Math.random() * 10));

    const updatedUsers = users.map(user => ({
      ...user,
      isFollowed: false,
      comments: comments.map(comment => comment.body),
    }));

    setUsers(updatedUsers);
  }

  function setIsFollowed(updatedUser) {
    const updatedUsers = users.map(userFromList => {
      if (userFromList == updatedUser) {
        userFromList.isFollowed = !updatedUser.isFollowed;
      }
      return { ...userFromList };
    });
    setUsers(updatedUsers);
  }

  return (
    <UsersListContext.Provider value={users}>
      <SetIsFollowedContext.Provider value={setIsFollowed}>
        {children}
      </SetIsFollowedContext.Provider>
    </UsersListContext.Provider>
  );
};
