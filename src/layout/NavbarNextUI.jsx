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

  const username = `${user?.firstName} ${user?.lastName}`;

  return (
    <Navbar className="flex justify-center bg-gradient-to-r from-background to-primary-100">
      {/* START: LOGO */}
      <NavbarBrand>
        <Link to={'/'}>
          <div className="hover-container">
            <Image
              className="navbar-logo"
              alt="LumiVerse Logo"
              src="../../assets/logo-no-background.svg"
            />
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
                  className="bg-primary-200 bg-opacity-25 backdrop-blur-sm backdrop-filter">
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
                  className="bg-primary-200 bg-opacity-25 backdrop-blur-sm backdrop-filter">
                  <i className="bi bi-people nav-icons"></i>
                </Tooltip>
              </Link>
            </div>

            {/* <div className="games-dropdown"> */}
            <Tooltip
              content="Games"
              placement="bottom"
              color="primary"
              size="sm"
              className="bg-primary-200 bg-opacity-25 backdrop-blur-sm backdrop-filter">
              <div className="flex items-center justify-center">
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
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Tooltip>
            {/* </div> */}
          </div>
        </NavbarContent>
      )}
      {/* END: LINKS */}

      {/* START: USER */}
      <NavbarContent justify="end">
        <NavbarItem className="flex justify-center align-center items-center">
          <UserButton />
          {isSignedIn ? (
            <div className="flex">
              <Link to={`/userprofile/${user?.id}`}>
                <p className="m-2">{username}</p>
              </Link>
              <SignOutButton className="m-2 hover:text-red-600" />
            </div>
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
