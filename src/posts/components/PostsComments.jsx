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

export default function PostsComments({ postId, postTitle, userAPI }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(null);
  const { user } = useUser();

  const onChangeComment = e => {
    const comment = e.target.value;
    setComment(comment);
  };
  useEffect(() => {
    fetchComments();
  }, []);

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

  async function fetchComments() {
    const fetchedComments = await getComments(postId);
    setComments(fetchedComments);
  }

  return (
    <>
      <Button onPress={onOpen}>Comments</Button>
      <Modal
        className="max-h-96 overflow-y-scroll"
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {userAPI.firstName}&apos;s post: {postTitle}
              </ModalHeader>
              <ModalBody>
                {comments.map(comment => (
                  <Comment
                    key={comment.id}
                    comment={comment.body}
                    userAPI={comment.user}
                  />
                ))}
              </ModalBody>
              <ModalFooter>
                <form
                  className="flex"
                  onSubmit={addComment}
                  method="post">
                  <Input
                    type="text"
                    name="comment"
                    label="Comment"
                    defaultValue=""
                    onChange={onChangeComment}
                    placeholder="Type your comment"
                  />
                  <Button
                    color="primary"
                    type="submit">
                    Send
                  </Button>
                </form>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
