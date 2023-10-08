import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export default function HeartButton() {
  const [isLiked, setIsLiked] = useState(false);
  const [likesNumber, setLikesNumber] = useState(0);

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
            ? 'bg-transparent text-foreground border-default-200'
            : 'shadow'
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
        {likesNumber} Likes
      </Button>
    </div>
  );
}
