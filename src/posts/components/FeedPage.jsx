import { useEffect, useState } from 'react';
import Page from '../../layout/Page';
import { getPosts } from '../posts.service';
import Post from './Post';
import { useUser } from '@clerk/clerk-react';

function FeedPage() {
  const [posts, setPosts] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(user);

  async function fetchPosts() {
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
  }

  return (
    <Page>
      {user.fullName}

      {posts.map(post => (
        <Post
          key={post.id}
          post={post}></Post>
      ))}
    </Page>
  );
}

export default FeedPage;
