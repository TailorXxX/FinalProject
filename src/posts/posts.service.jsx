import { comments, posts } from '../config/BASE_URL';
import {
  performDeleteRequest,
  performListGetRequest,
  performPatchRequest,
  performPostRequest,
} from '../functions/httpRequests.js';

export async function getPosts() {
  return await performListGetRequest(posts);
}

export async function getPostsByUserId(userId) {
  return await performListGetRequest(`${posts}?userId=${userId}`);
}

export async function addPost(post) {
  return await performPostRequest(posts, post);
}

export async function editPost(post) {
  return await performPatchRequest(`${posts}/${post.id}`, post);
}

export async function deletePost(post) {
  return await performDeleteRequest(`${posts}/${post.id}`);
}

export async function getComments(postId) {
  return await performListGetRequest(`${comments}?postId=${postId}`);
}

export async function addCommentToPost(comment) {
  return await performPostRequest(comments, comment);
}
export async function editComment(comment) {
  return await performPatchRequest(`${comments}/${comment.id}`, comment);
}

export async function deleteComment(comment) {
  return await performDeleteRequest(`${comments}/${comment.id}`);
}
