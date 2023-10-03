import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from '@nextui-org/react';

import { getComments } from '../posts.service';
import { useEffect, useState } from 'react';
import Comment from './Comment';
import { useUser } from '@clerk/clerk-react';
import UserAvatar from '../../users/components/UserAvatar';

export default function PostsComments({ postId, postTitle, postUser }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(null);
  const { user } = useUser();

  const onChangeComment = e => {
    const comment = e.target.value;
    setComment(comment);
  };
  useEffect(() => {
    async function fetchComments() {
      const fetchedComments = await getComments(postId);
      setComments(fetchedComments);
    }
    fetchComments();
  }, [postId]);

  function addComment(e) {
    e.preventDefault();
    // const form = e.target;
    // const formData = new FormData(form);
    // console.log(formData);

    const detailedComment = {
      id: comments.length + 1,
      body: comment,
      user: { id: user.id, username: user.fullName },
    };
    setComments([...comments, detailedComment]);
    e.target.reset();
  }

  return (
    <>
      <Button
        className="bg-transparent"
        isIconOnly
        aria-label="Comment"
        onPress={onOpen}
        color="hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-text-opacity)))">
        <i className="bi bi-chat"></i>
      </Button>
      {/* <Button
        className=" bg-gradient-to-tr from-blue-600 to-grey-200 text-white shadow-lg"
        radius="full"
        onPress={onOpen}>
        <img src="../posts/assets/comment.png" />
      </Button> */}
      <Modal
        className="max-h-96 max-w-2xl overflow-y-scroll"
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {
            <>
              <ModalHeader className="flex flex-col gap-1">
                <UserAvatar userId={postUser?.id} />
                {postTitle}
              </ModalHeader>
              <ModalBody>
                <p>Comments:</p>
                {comments.map(comment => (
                  <Comment
                    key={comment.id}
                    comment={comment.body}
                    userId={comment.user.id}
                  />
                ))}
              </ModalBody>
              <ModalFooter>
                <form
                  className="flex w-max grow"
                  onSubmit={addComment}
                  method="post">
                  <Input
                    className="h-11 m-2"
                    type="text"
                    name="comment"
                    label="Comment"
                    defaultValue=""
                    onChange={onChangeComment}
                    placeholder="Type your comment"
                  />
                  <Button
                    className="flex h-11 m-2"
                    color="primary"
                    type="submit">
                    <i className="bi bi-send-fill"></i>
                    Send
                  </Button>
                </form>
              </ModalFooter>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
