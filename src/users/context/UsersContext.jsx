import { useUser } from '@clerk/clerk-react';
import { createContext, useContext, useEffect, useState } from 'react';
import { getAllUsers, toggleUserFollowState } from '../user.service';

const UsersListContext = createContext();
const SetIsFollowedContext = createContext();
const UserByIdContext = createContext();

export const useUsers = () => useContext(UsersListContext);
export const useFollowButton = () => useContext(SetIsFollowedContext);
export const useUserById = () => useContext(UserByIdContext);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const users = await getAllUsers();
    const myUser = {
      image: user?.imageUrl,
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
    };
    const allUsers = [...users, myUser];

    setUsers(allUsers);
  }

  function fetchUserById(id) {
    return users.filter(user => user.id === id)[0];
  }

  async function toggleFollowState(userToUpdate) {
    const updatedUser = await toggleUserFollowState(userToUpdate.id);
    await fetchUsers();

    return updatedUser;
  }

  return (
    <UsersListContext.Provider value={users}>
      <SetIsFollowedContext.Provider value={toggleFollowState}>
        <UserByIdContext.Provider value={fetchUserById}>
          {children}
        </UserByIdContext.Provider>
      </SetIsFollowedContext.Provider>
    </UsersListContext.Provider>
  );
};
