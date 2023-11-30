import { useEffect, useState } from 'react';
import Page from '../../layout/Page';
import { deletePost, getPosts } from '../posts.service';
import AddPost from './AddPost';
import Post from './Post';

function FeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
  }

  function getNewPost(newPost) {
    setPosts(previousPosts => [newPost, ...previousPosts]);
  }

  function deletePostFromList(deletedPost) {
    const postsWithoutDeletedPost = posts.filter(
      post => deletedPost.id != post.id
    );
    setPosts(postsWithoutDeletedPost);
  }

  async function deleteMyPost(deletedPost) {
    const isDeleted = await deletePost(deletedPost);
    isDeleted && deletePostFromList(deletedPost);
  }

  return (
    <Page>
      <AddPost getNewPost={getNewPost} />
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          deleteMyPost={deleteMyPost}></Post>
      ))}
    </Page>
  );
}

export default FeedPage;
