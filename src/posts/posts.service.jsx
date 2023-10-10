import { comments, posts } from '../config/BASE_URL';
import { performListGetRequest, performPostRequest } from "../functions/httpRequests.js";

export async function getComments(postId) {
    return await performListGetRequest( `${ comments }?postId=${ postId }` )
}

export async function getPosts() {
    return await performListGetRequest( posts )
}

export async function addCommentToPost(comment) {
    return await performPostRequest( comments, comment )
}
