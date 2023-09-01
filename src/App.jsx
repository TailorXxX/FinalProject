import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import LumiVerse from './components/LumiVerse';

import NavbarNextUI from './components/NavbarNextUI';
import Cursor from './components/Cursor';

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export default function App() {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <Cursor />
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
