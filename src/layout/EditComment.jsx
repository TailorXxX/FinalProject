import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useRef } from 'react';

export default function EditComment({ comment, editMyComment }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const commentBodyRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    const commentToUpdate = { ...comment, body: commentBodyRef.current?.value };

    await editMyComment(commentToUpdate);
  }

  return (
    <>
      <Button
        className="bg-transparent"
        isIconOnly
        aria-label="Comment"
        onPress={onOpen}
        color="hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-text-opacity)))">
        <i className="bi bi-pencil-square"></i>
      </Button>

      <Modal
        className="h-1/4 max-w-xl place-self-start border overflow-y-hidden"
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent className="bg-gray-900 bg-opacity-50 backdrop-blur-lg backdrop-filter">
          {
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit your comment
              </ModalHeader>

              <ModalFooter>
                <form
                  className="flex w-max grow"
                  onSubmit={handleSubmit}
                  method="post">
                  <Input
                    className="h-11 m-2 sticky"
                    color="primary"
                    type="text"
                    name="comment"
                    label="Comment"
                    ref={commentBodyRef}
                    defaultValue={comment.body}
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
