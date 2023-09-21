import { useEffect, useState } from 'react';
import Page from '../layout/Page';
import { getPosts } from '../users/user.service';
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
  return (
    <Page>
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}></Post>
      ))}
    </Page>
  );
}

export default FeedPage;
