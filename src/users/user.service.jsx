import { posts, users, usersList } from '../config/BASE_URL';

export async function getUsersWithCount(count = 10) {
  const res = await fetch(`${usersList}${count}`);
  const data = await res.json();
  return data.results;
}

export async function getUserById(id) {
  const res = await fetch(`${users}/${id}`);
  const data = await res.json();

  const updatedUser = {
    ...data,
    isFollowed: Math.round(Math.random()) == 1 ? true : false,
  };
  return updatedUser;
}

export async function getComments(postId) {
  const res = await fetch(`${posts}/${postId}/comments`);
  const data = await res.json();
  return data.comments;
}

export async function getPosts() {
  const res = await fetch(posts);
  const data = await res.json();
  return data.posts;
}
