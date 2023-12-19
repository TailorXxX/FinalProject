import { useUser } from '@clerk/clerk-react';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUser,
  getAllUsers,
  getUserById,
  toggleUserFollowState,
  updateUser,
} from '../user.service';

const UsersListContext = createContext();
const SetIsFollowedContext = createContext();
const UserByIdContext = createContext();

export const useUsers = () => useContext(UsersListContext);
export const useFollowButton = () => useContext(SetIsFollowedContext);
export const useUserById = () => useContext(UserByIdContext);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      checkUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignedIn]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const allUsers = await getAllUsers();

    setUsers(allUsers);
  }

  async function checkUser() {
    const myUser = {
      image: user?.imageUrl,
      id: user?.id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      fullName: user?.fullName,
      emailAddress: user?.emailAddresses[0].emailAddress,
    };

    const userOrUndefined = await getUserById(user.id);

    if (userOrUndefined === null || userOrUndefined === undefined) {
      return await createUser(myUser);
    }
    return await updateUser(myUser);
  }

  function fetchUserById(id) {
    return users.filter(user => user.id == id)[0];
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
