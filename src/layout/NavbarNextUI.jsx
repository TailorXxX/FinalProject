import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react';
// import { Typography } from '@mui/material';
import {
  Button,
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
          <div className="logo-container w-16 max-[200px]:hidden">
            <Image
              removeWrapper="true"
              className="navbar-logo"
              alt="LumiVerse Logo"
              src="../../assets/logo.png"
            />
          </div>
        </Link>
      </NavbarBrand>
      {/* END: LOGO */}

      {/* START: LINKS */}
      {isSignedIn && (
        <NavbarContent
          className="hidden md:flex"
          justify="center">
          <div className="flex justify-center gap-4">
            <div>
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

            <Tooltip
              content="Games"
              placement="bottom"
              color="primary"
              size="sm"
              className="bg-primary-200 bg-opacity-25 backdrop-blur-sm backdrop-filter">
              <div className="flex items-center justify-center">
                <Dropdown color="primary">
                  <DropdownTrigger>
                    <i className="bi bi-controller nav-icons"></i>
                  </DropdownTrigger>
                  <DropdownMenu
                    color="white"
                    variant="faded"
                    aria-label="Static Actions">
                    <DropdownItem
                      textValue="Tic Tac Toe"
                      key="tic-tac-toe-link">
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
      <NavbarContent
        as="div"
        justify="end">
        <NavbarItem className="flex justify-center align-center items-center">
          <UserButton />
          {isSignedIn ? (
            <div className="flex">
              <Link to={`/userprofile/${user?.id}`}>
                <p className="m-2 max-[370px]:hidden">{username}</p>
              </Link>

              <Dropdown
                className="md:hidden"
                color="primary">
                <DropdownTrigger>
                  <Button
                    color="primary"
                    className="bg-transparent md:hidden">
                    <i className="bi bi-list nav-icons"></i>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  color="white"
                  variant="faded"
                  aria-label="Dropdown menu with icons">
                  <DropdownItem
                    className="w-full"
                    href="/"
                    key="feed page"
                    textValue="Feed page"
                    showDivider
                    startContent={<i className="bi bi-house nav-icons"></i>}>
                    <Link to={'/'}>Feed page</Link>
                  </DropdownItem>

                  <DropdownItem
                    href="/friends"
                    key="friends"
                    textValue="Friends"
                    showDivider
                    startContent={<i className="bi bi-people nav-icons"></i>}>
                    <Link to={'friends'}>Friends</Link>
                  </DropdownItem>
                  <DropdownItem
                    key="games"
                    textValue="Games"
                    startContent={<i className="bi bi-joystick nav-icons"></i>}>
                    Games
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
