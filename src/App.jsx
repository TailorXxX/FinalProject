/* eslint-disable no-unused-vars */
import AccordionNextUI from './components/AccordionNextUI';
import NavbarMUI from './components/NavbarMUI';
import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';
import LumiVerse from './components/LumiVerse';

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

function App() {
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>
        <NavbarMUI />
        <SignedIn></SignedIn>

        <SignedOut>
          <h3>Please Sign In!</h3>
        </SignedOut>
      </ClerkProvider>
    </>
  );
}
function Welcome() {
  return <div>Hello you are signed in</div>;
}

export default App;
