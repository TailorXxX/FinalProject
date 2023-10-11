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
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Tooltip,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function NavbarNextUI() {
  const { isSignedIn, user } = useUser();

  const username = user?.username
    ? user.username
    : user?.primaryEmailAddress.emailAddress.split('@')[0];

  return (
    <Navbar className="flex justify-center">
      {/* START: LOGO */}
      <NavbarBrand>
        <Link to={'/'}>
          <div className="hover-container">
            <Image
              className="navbar-logo"
              width={60}
              alt="LumiVerse Logo"
              src="../../assets/logo.png"
            />
            <span className="hover-text">LumiVerse</span>
          </div>
        </Link>
      </NavbarBrand>
      {/* END: LOGO */}

      {/* START: LINKS */}
      {isSignedIn && (
        <NavbarContent
          className="sm:flex"
          justify="center">
          <div className="flex justify-center gap-4">
            <div className="">
              <Link to={'/'}>
                <Tooltip
                  content="Feed Page"
                  placement="bottom"
                  color="primary"
                  size="sm"
                  className="bg-gray-600 bg-opacity-25 backdrop-blur-sm backdrop-filter">
                  <i className="bi bi-house nav-icons"></i>
                </Tooltip>
              </Link>
            </div>
            <div>
              <Link to={'friends'}>
                <Tooltip
                  content="Friends"
                  placement="bottom"
                  color="primary"
                  size="sm"
                  className="bg-gray-600 bg-opacity-25 backdrop-blur-sm backdrop-filter">
                  <i className="bi bi-people nav-icons"></i>
                </Tooltip>
              </Link>
            </div>
            <Tooltip
              content="Games"
              placement="right"
              color="primary"
              size="sm"
              className="bg-gray-600 bg-opacity-25 backdrop-blur-sm backdrop-filter">
              <div className="games-dropdown">
                <Dropdown>
                  <DropdownTrigger>
                    <i className="bi bi-joystick nav-icons"></i>
                  </DropdownTrigger>
                  <DropdownMenu
                    className="bg-transparent"
                    aria-label="Static Actions">
                    <DropdownItem key="tic-tac-toe-link">
                      <Link to="/tic-tac-toe-game">
                        <div className="w-full">TicTacToe Game</div>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="chess-link">
                      <Link to="/chess-game">
                        <div className="w-full">Chess</div>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Tooltip>
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
