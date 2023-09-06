import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useUser,
} from '@clerk/clerk-react';
// import { Typography } from '@mui/material';
import {
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
          className="sm:flex gap-4"
          justify="center">
          <NavbarItem>
            <Link
              color="foreground"
              to="/chat">
              Chat
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              to="/customers"
              aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              to="integrations">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      )}
      {/* END: LINKS */}

      {/* START: USER */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="flex justify-start">
          {/* {user && <Typography>Hello, {username}</Typography>} */}
          <p>{username}</p>
          <UserButton />
          {isSignedIn ? (
            <SignOutButton />
          ) : (
            <>
              <SignUpButton />
              <SignInButton />
            </>
          )}
        </NavbarItem>
      </NavbarContent>
      {/* END: USER */}
    </Navbar>
  );
}
