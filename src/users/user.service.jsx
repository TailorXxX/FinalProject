import { users } from '../config/BASE_URL.js';
import {
  performListGetRequest,
  performObjectGetRequest,
  performPatchRequest,
  performPostRequest,
  performPutRequest,
} from '../functions/httpRequests.js';

export async function getAllUsers() {
  return await performListGetRequest(users);
}

export async function updateUser(user) {
  return await performPatchRequest(`${users}/${user.id}`, user);
}

export async function createUser(user) {
  return await performPostRequest(`${users}`, user);
}

export async function getUsersWithCount(count = 5) {
  return await performListGetRequest(`${users}?_limit=${count}`);
}

export async function getUserById(id) {
  const userByIdList = await performObjectGetRequest(`${users}?id=${id}`);
  return userByIdList[0];
}

export async function toggleUserFollowState(userId) {
  const userToUpdate = await getUserById(userId);

  const updatedUser = { ...userToUpdate, isFollowed: !userToUpdate.isFollowed };
  return await performPutRequest(`${users}/${userId}`, updatedUser);
}
