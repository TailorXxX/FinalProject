import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';

export default function EditComment() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // eslint-disable-next-line no-unused-vars
  const [newComment, setNewComment] = useState(null);

  const onChangeComment = e => {
    const newComment = e.target.value;
    setNewComment(newComment);
  };

  function addComment(e) {
    e.preventDefault();
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

      <Modal
        className="h-3/4 max-w-2xl overflow-y-scroll"
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent className="bg-inherit bg-opacity-75 backdrop-blur-lg backdrop-filter">
          {
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit your comment
              </ModalHeader>
              <ModalBody>{newComment}</ModalBody>
              <ModalFooter>
                <form
                  className="flex w-max grow"
                  onSubmit={addComment}
                  method="post">
                  <Input
                    className="h-11 m-2 sticky"
                    color="primary"
                    type="text"
                    name="comment"
                    label="Comment"
                    defaultValue=""
                    onChange={onChangeComment}
                    placeholder="Type your new comment"
                  />
                  <Button
                    className="flex h-11 m-2 sticky"
                    color="primary"
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
