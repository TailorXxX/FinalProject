import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  useDisclosure,
} from '@nextui-org/react';

import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import FollowButton from '../../layout/FollowButton';
import UserAvatar from '../../users/components/UserAvatar';
import {
  addCommentToPost,
  deleteComment,
  editComment,
  getComments,
} from '../posts.service';
import Comment from './Comment';

export default function PostsComments({
  postId,
  postTitle,
  postBody,
  postUser,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(null);
  const { user } = useUser();

  const onChangeComment = e => {
    const comment = e.target.value;
    setComment(comment);
  };

  async function fetchComments() {
    const fetchedComments = await getComments(postId);
    setComments(fetchedComments);
  }

  async function handleOpen() {
    await fetchComments();
    onOpen();
  }

  async function addComment(e) {
    e.preventDefault();

    const detailedComment = {
      body: comment,
      user: { id: user.id, username: user.fullName },
      postId: postId,
    };

    const addedComment = await addCommentToPost(detailedComment);
    setComments([...comments, addedComment]);
    e.target.reset();
  }

  function addUpdatedCommentToList(updatedComment) {
    const foundComment = comments.filter(
      comment => updatedComment.id == comment.id
    )[0];
    const index = comments.indexOf(foundComment);
    const updatedComments = [...comments];
    updatedComments.splice(index, 1, updatedComment);
    return updatedComments;
  }

  function deleteCommentFromList(deletedComment) {
    const commentsWithoutDeletedComment = comments.filter(
      comment => deletedComment.id != comment.id
    );
    setComments(commentsWithoutDeletedComment);
  }

  async function deleteMyComment(deletedComment) {
    const isDeleted = await deleteComment(deletedComment);
    isDeleted && deleteCommentFromList(deletedComment);
  }

  async function editMyComment(comment) {
    const myComment = await editComment(comment);

    setComments(addUpdatedCommentToList(myComment));
  }

  return (
    <>
      <Button
        className="bg-transparent border border-transparent hover:border-white"
        isIconOnly
        aria-label="Comment"
        onPress={handleOpen}
        color="">
        <i className="bi bi-chat"></i>
      </Button>

      <Modal
        className="h-3/4 max-w-2xl overflow-y-scroll"
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent className="bg-inherit bg-opacity-75 backdrop-blur-lg backdrop-filter">
          {
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <UserAvatar userId={postUser?.id} />
                  <FollowButton userFromList={postUser} />
                </div>

                <div className="m-3">{postTitle}</div>

                <ScrollShadow
                  hideScrollBar
                  className="w-auto h-20 text-medium font-normal">
                  {postBody}
                </ScrollShadow>
              </ModalHeader>
              <ModalBody>
                <Divider />
                <p>Comments:</p>
                {comments.map(comment => (
                  <Comment
                    key={comment.id}
                    comment={comment}
                    myUserId={user.id}
                    editMyComment={editMyComment}
                    deleteMyComment={deleteMyComment}
                  />
                ))}
              </ModalBody>
              <ModalFooter>
                <form
                  className="flex w-max grow border rounded-xl"
                  onSubmit={addComment}
                  method="post">
                  <Input
                    className="h-11 m-2 sticky text-foreground"
                    color="secondary"
                    type="text"
                    name="comment"
                    label="Comment"
                    defaultValue=""
                    onChange={onChangeComment}
                    placeholder="Type your comment..."
                  />
                  <Button
                    className="flex h-11 m-2 sticky border border-transparent hover:border-white hover:bg-primary-100"
                    color=""
                    type="submit">
                    <i className="bi bi-send"></i>
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
