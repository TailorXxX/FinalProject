import { useParams } from 'react-router-dom';

import { Tab, Tabs } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import FollowButton from '../../layout/FollowButton';
import Post from '../../posts/components/Post';
import {
  deletePost,
  editPost,
  getPostsByUserId,
} from '../../posts/posts.service';
import { useUserById } from '../context/UsersContext';

function UserProfilePage() {
  const { userId } = useParams();
  const getUserById = useUserById();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      setUser(null);
      const newUser = await getUserById(userId);
      setUser(newUser);
    };

    fetchUser();
  }, [userId, getUserById]);

  function addUpdatedPostToList(updatedPost) {
    const foundPost = posts.filter(post => updatedPost.id == post.id)[0];
    const index = posts.indexOf(foundPost);
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1, updatedPost);
    return updatedPosts;
  }

  async function editMyPost(editedPost) {
    const isEdited = await editPost(editedPost);
    setPosts(addUpdatedPostToList(isEdited));
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

  async function getUserPosts() {
    const userPosts = await getPostsByUserId(userId);
    setPosts(userPosts);
  }

  function handleSelectionChange(tab) {
    switch (tab) {
      case 'posts':
        getUserPosts();
        break;
      case 'info':
        break;

      default:
        break;
    }
  }

  return (
    <div className="profile-page w-full">
      <div className="relative w-full p-3 bg-gray-900 bg-opacity-25 backdrop-blur-sm backdrop-filter">
        <div>
          <img
            src={`https://picsum.photos/seed/${userId}/800/300`}
            alt="Cover Photo"
            className="border border-secondary-800"
          />
        </div>

        <div className="absolute -bottom-9 left-9 w-24 h-24 border-small border-secondary-800 flex justify-center items-center overflow-hidden rounded-full cursor-pointer max-[370px]:w-16 max-[370px]:h-16 max-[370px]:-bottom-5 max-[270px]:w-12 max-[270px]:h-12 max-[270px]:-bottom-3">
          <img
            src={user?.image}
            alt="User Image"
          />
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-primary-background to-primary-100  flex bg-opacity-90 p-10">
        <div className="flex justify-between items-center gap-2 w-full max-[320px]:flex-col">
          <p>
            {user?.firstName} {user?.lastName}
          </p>
          <FollowButton userFromList={user} />
        </div>
        <div className="flex flex-col"></div>
      </div>

      <div className="w-full bg-gradient-to-r from-primary-background to-primary-100 bg-opacity-25 backdrop-blur-sm backdrop-filter">
        <div className="flex w-full bg-trasparent backdrop-blur-lg flex-col justify-center items-center">
          <Tabs
            aria-label="Options"
            color="primary"
            variant="bordered"
            onSelectionChange={handleSelectionChange}
            classNames={{
              tabList: 'gap-6 w-full  rounded-none p-0 border-none',
              cursor: 'w-full bg-[#ffffff00]',
              tab: 'custom-profile-tabs max-w-fit px-0',
              tabContent: ' ',
            }}>
            <Tab
              key="posts"
              className="w-full flex"
              title={
                <div className="flex items-center space-x-2">
                  <i className="bi bi-postcard-fill"></i>
                  <span>Posts</span>
                </div>
              }>
              <div className="w-full h-full p-2">
                {posts.map(post => (
                  <Post
                    key={post.id}
                    post={post}
                    editMyPost={editMyPost}
                    deleteMyPost={deleteMyPost}
                  />
                ))}
              </div>
            </Tab>
            <Tab
              key="info"
              title={
                <div className="flex items-center space-x-2">
                  <i className="bi bi-person-lines-fill"></i>
                  <span>Info</span>
                </div>
              }>
              <div className="w-full h-full p-2 text-lg flex flex-col gap-2">
                <p>First name: {user?.firstName}</p>
                <p>Last name: {user?.lastName}</p>
                <p>Education: {user?.university}</p>
                <p>Works at: {user?.company?.name}</p>
                <p>Job title: {user?.company?.title}</p>
                <p>Department: {user?.company?.department}</p>
                <p>Age: {user?.age}</p>
                <p>Eye color: {user?.eyeColor}</p>
                <p>Gender: {user?.gender}</p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;
