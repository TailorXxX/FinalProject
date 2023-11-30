import { useUser } from '@clerk/clerk-react';
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Divider,
  Input,
} from '@nextui-org/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addPost } from '../posts.service';

export default function AddPost({ getNewPost }) {
  const postData = {
    title: '',
    body: '',
  };
  const { user } = useUser();
  const [post, setPost] = useState(postData);

  function updateProperty(property) {
    setPost(prevPost => ({ ...prevPost, ...property }));
  }

  async function addNewPost(e) {
    e.preventDefault();

    const detailedPost = {
      ...post,
      userId: user.id,
    };

    const addedPost = await addPost(detailedPost);

    getNewPost(addedPost);
    e.target.reset();
  }

  function onFormInputChange(e, property) {
    switch (property) {
      case 'title':
        updateProperty({ title: e.target.value });
        break;
      case 'body':
        updateProperty({ body: e.target.value });
        break;
    }
  }

  return (
    <div className="flex justify-items-center items-center bg-transparent ">
      <Accordion
        className="flex justify-stretch items-center"
        fullWidth>
        <AccordionItem
          fullWidth
          key="1"
          indicator={<i className="bi bi-chevron-left text-white"></i>}
          aria-label="Add a new post ..."
          title="Add a new post ..."
          className="flex flex-col w-full">
          <form
            className="flex w-full items-start justify-between rounded-2xl gap-4"
            onSubmit={addNewPost}
            method="post">
            <Link
              to={`/userprofile/${user.id}`}
              className="self-center">
              <Avatar
                src={user.imageUrl}
                size="lg"
                isBordered
                color="primary"
                className="ml-2 "
              />
            </Link>
            <div className="grow-1 w-full flex gap-2 flex-col">
              <Input
                className=" font-semibold sticky border border-y-transparent rounded-2xl w-full active:bg-secondary-100"
                color="secondary"
                size="lg"
                type="text"
                name="post-title"
                label="Title"
                defaultValue=""
                onChange={e => onFormInputChange(e, 'title')}
                placeholder="Give a title..."
              />

              <Divider />

              <Input
                className=" font-semibold  sticky border border-y-transparent rounded-2xl active:bg-secondary-100"
                color="secondary"
                size="lg"
                type="text"
                name="post-description"
                label="Description"
                defaultValue=""
                onChange={e => onFormInputChange(e, 'body')}
                placeholder="Describe your post..."
              />
            </div>

            <Button
              className="bg-secondary-100 self-center  border hover:bg-primary-200"
              color="primary"
              type="submit">
              <i className="bi bi-send"></i>
              Post
            </Button>
          </form>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
