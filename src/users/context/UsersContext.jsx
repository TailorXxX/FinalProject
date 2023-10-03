import { createContext, useContext, useEffect, useState } from 'react';
import { getUsersWithCount } from '../user.service';
import { useUser } from '@clerk/clerk-react';

const UsersListContext = createContext();
const SetIsFollowedContext = createContext();
const UserByIdContext = createContext();

export const useUsers = () => useContext(UsersListContext);
export const useFollowButton = () => useContext(SetIsFollowedContext);
export const useUserById = () => useContext(UserByIdContext);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const { user } = useUser();
  console.log(user);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const users = await getUsersWithCount(100);
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

  function toggleFollowState(userToUpdate) {
    console.log(userToUpdate);
    let updatedUser = userToUpdate;

    const updatedUsers = users.map(userFromList => {
      if (userFromList.id == userToUpdate.id) {
        userFromList.isFollowed = !userFromList.isFollowed;
        updatedUser = userFromList;
      }

      return { ...userFromList };
    });
    console.log(updatedUser);
    setUsers(updatedUsers);
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
