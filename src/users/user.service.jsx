import { posts, usersList } from '../config/BASE_URL';

export async function getUsersWithCount(count = 10) {
  const res = await fetch(`${usersList}${count}`);
  const data = await res.json();
  return data.results;
}

export async function getComments(postId) {
  const res = await fetch(`${posts}/${postId}/comments`);
  const data = await res.json();
  return data.comments;
}
