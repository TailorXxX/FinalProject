import { useUser } from '@clerk/clerk-react';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function HeartButton({ userFromListId }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesNumber, setLikesNumber] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    setLikesNumber(Math.floor(Math.random() * 100));
  }, []);

  function handleClickLikeButton() {
    setIsLiked(isLiked => !isLiked);
    !isLiked
      ? setLikesNumber(likesNumber + 1)
      : setLikesNumber(likesNumber - 1);
  }

  return (
    <div>
      <Button
        className={
          !isLiked
            ? 'bg-transparent text-foreground font-semibold text-sm border border-transparent hover:border-white'
            : 'text-foreground font-semibold text-sm border border-transparent'
        }
        size="sm"
        color="primary"
        variant="solid"
        onClick={handleClickLikeButton}
        startContent={
          !isLiked ? (
            <i className="bi bi-heart "></i>
          ) : (
            <i className="bi bi-heart-fill "></i>
          )
        }>
        {user.id !== userFromListId
          ? `${likesNumber} Likes`
          : `${Math.abs(likesNumber - likesNumber)} Likes`}
      </Button>
    </div>
  );
}
