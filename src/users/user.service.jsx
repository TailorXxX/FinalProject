import { users } from '../config/BASE_URL.js';
import {
  performListGetRequest,
  performObjectGetRequest,
  performPutRequest,
} from '../functions/httpRequests.js';

export async function getAllUsers() {
  return await performListGetRequest(users);
}

export async function getUsersWithCount(count = 5) {
  return await performListGetRequest(`${users}?_limit=${count}`);
}

export async function getUserById(id) {
  console.log(id);
  const userByIdList = await performObjectGetRequest(`${users}?id=${id}`);
  console.log(userByIdList);
  return userByIdList[0];
}

export async function toggleUserFollowState(userId) {
  console.log(userId);
  const userToUpdate = await getUserById(userId);
  console.log(userToUpdate);
  const updatedUser = { ...userToUpdate, isFollowed: !userToUpdate.isFollowed };
  return await performPutRequest(`${users}/${userId}`, updatedUser);
}
