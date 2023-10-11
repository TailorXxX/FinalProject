import { comments, posts } from '../config/BASE_URL';
import {
  performDeleteRequest,
  performListGetRequest,
  performPatchRequest,
  performPostRequest,
} from '../functions/httpRequests.js';

export async function getComments(postId) {
  return await performListGetRequest(`${comments}?postId=${postId}`);
}

export async function getPosts() {
  return await performListGetRequest(posts);
}

export async function addCommentToPost(comment) {
  return await performPostRequest(comments, comment);
}
export async function editComment(comment) {
  return await performPatchRequest(`${comments}/${comment.id}`, comment);
}

export async function editPost(post) {
  return await performPatchRequest(posts, post);
}

export async function deleteComment(comment) {
  return await performDeleteRequest(`${comments}/${comment.id}`);
}
