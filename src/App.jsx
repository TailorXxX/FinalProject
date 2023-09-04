import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';
import LumiVerse from './components/LumiVerse';

// import Cursor from './components/Cursor';
import NavbarNextUI from './components/NavbarNextUi';

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export default function App() {
  return (
    <>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
        }}
        publishableKey={clerkPubKey}>
        {/* <Cursor /> */}
        <NavbarNextUI />
        <SignedIn>
          <LumiVerse />
        </SignedIn>

        <SignedOut>
          <h3>Please Sign In!</h3>
        </SignedOut>
      </ClerkProvider>
    </>
  );
}
