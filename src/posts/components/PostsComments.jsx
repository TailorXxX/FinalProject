import {
    Button,
    Divider,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useDisclosure,
} from '@nextui-org/react';

import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import UserAvatar from '../../users/components/UserAvatar';
import { addCommentToPost, getComments } from '../posts.service';
import Comment from './Comment';

export default function PostsComments({ postId, postTitle, postUser }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [ comments, setComments ] = useState( [] );
    const [ comment, setComment ] = useState( null );
    const { user } = useUser();

    const onChangeComment = e => {
        const comment = e.target.value;
        setComment( comment );
    };


    async function fetchComments() {
        const fetchedComments = await getComments( postId );
        setComments( fetchedComments );
    }

    // Tu incarcai toate comentariile tuturor postarilor odata cu postarile,
    // Ceea ce ducea la un load time foarte mare.
    // Ti-am mutat incarcarea comentariilor unei postari astfel incat sa se incarce
    // dupa ce dai click pe butonul de comments si se deschide modalul
    async function handleOpen() {
        await fetchComments();
        onOpen();
    }

    async function addComment(e) {
        e.preventDefault();

        const detailedComment = {
            body  : comment,
            user  : { id: user.id, username: user.fullName },
            postId: postId
        };

        const addedComment = await addCommentToPost( detailedComment )
        setComments( [ ...comments, addedComment ] );
        e.target.reset();
    }

    return (
            <>
                <Button
                        className="bg-transparent"
                        isIconOnly
                        aria-label="Comment"
                        onPress={ handleOpen }
                        color="hsl(var(--nextui-default-400) / var(--nextui-default-400-opacity, var(--tw-text-opacity)))">
                    <i className="bi bi-chat"></i>
                </Button>

                <Modal
                        className="h-3/4 max-w-2xl overflow-y-scroll"
                        isOpen={ isOpen }
                        onOpenChange={ onOpenChange }>
                    <ModalContent className="bg-inherit bg-opacity-75 backdrop-blur-lg backdrop-filter">
                        {
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    <UserAvatar userId={ postUser?.id }/>

                                    { postTitle }
                                </ModalHeader>
                                <ModalBody>
                                    <Divider/>
                                    <p>Comments:</p>
                                    { comments.map( comment => (
                                            <Comment
                                                    key={ comment.id }
                                                    comment={ comment.body }
                                                    userId={ comment.user.id }
                                                    myUserId={ user.id }
                                            />
                                    ) ) }
                                </ModalBody>
                                <ModalFooter>
                                    <form
                                            className="flex w-max grow"
                                            onSubmit={ addComment }
                                            method="post">
                                        <Input
                                                className="h-11 m-2 sticky"
                                                color="primary"
                                                type="text"
                                                name="comment"
                                                label="Comment"
                                                defaultValue=""
                                                onChange={ onChangeComment }
                                                placeholder="Type your comment"
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
