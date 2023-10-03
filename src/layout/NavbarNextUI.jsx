import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react';
// import { Typography } from '@mui/material';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function NavbarNextUI() {
  const { isSignedIn, user } = useUser();

  const username = user?.username
    ? user.username
    : user?.primaryEmailAddress.emailAddress.split('@')[0];

  return (
    <Navbar>
      {/* START: LOGO */}
      <NavbarBrand>
        <Link to={'/'}>
          <p className="font-bold text-inherit">LumiVerse</p>
        </Link>
      </NavbarBrand>
      {/* END: LOGO */}

      {/* START: LINKS */}
      {isSignedIn && (
        <NavbarContent
          className="sm:flex gap-6"
          justify="center">
          <div className="flex gap-4">
            <div className="">
              <Link to={'/'}>
                <i className="bi bi-house nav-icons"></i>
              </Link>
            </div>
            <div>
              <Link to={''}>
                <i className="bi bi-people nav-icons"></i>
              </Link>
            </div>
            <div className="games-dropdown">
              <Dropdown>
                <DropdownTrigger>
                  <i className="bi bi-joystick nav-icons"></i>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem key="chess">
                    <Link to="/chess">Chess</Link>
                  </DropdownItem>
                  <DropdownItem key="tictactoe">
                    <Link to="/tictactoegame">TicTacToe Game</Link>
                  </DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger">
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </NavbarContent>
      )}
      {/* END: LINKS */}

      {/* START: USER */}
      <NavbarContent justify="end">
        <NavbarItem className="flex justify-start align-center">
          <p className="m-2">{username}</p>
          <UserButton />
          {isSignedIn ? (
            <SignOutButton className="m-2" />
          ) : (
            <>
              <SignUpButton className="m-2" />
              <SignInButton />
            </>
          )}
        </NavbarItem>
      </NavbarContent>
      {/* END: USER */}
    </Navbar>
  );
}
