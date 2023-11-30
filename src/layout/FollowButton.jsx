import { Button } from '@nextui-org/react';
import { useFollowButton } from '../users/context/UsersContext';

function FollowButton({ userFromList }) {
  const toggleFollowState = useFollowButton();

  async function toggleUserFollowState(user) {
    await toggleFollowState(user);
  }

  async function handleFollowButtonClick() {
    await toggleUserFollowState(userFromList);
  }

  return (
    <>
      <Button
        className={
          userFromList?.isFollowed
            ? 'bg-transparent text-foreground hover:border-primary-50'
            : 'border border-transparent hover:border-white'
        }
        color="primary"
        radius="full"
        size="sm"
        variant={userFromList?.isFollowed ? 'bordered' : 'solid'}
        onPress={handleFollowButtonClick}>
        {userFromList?.isFollowed ? 'Unfollow' : 'Follow'}
      </Button>
    </>
  );
}

export default FollowButton;
