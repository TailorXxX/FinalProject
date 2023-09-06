import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';

// import Cursor from './components/Cursor';
import NavbarNextUI from './layout/NavbarNextUI';
import { UsersProvider } from './users/context/UsersContext';
import { Route, Routes } from 'react-router-dom';
import AccordionNextUI from './layout/AccordionNextUI';
import UsersPosts from './users/components/UsersPosts';
import ChatGPT from './chat-gpt/ChatGPT';

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
          <UsersProvider>
            <div className="grid grid-cols-12">
              <div className="col-span-3 max-w-xs">
                <AccordionNextUI />
              </div>
              <div className="col-span-9">
                <Routes>
                  <Route
                    index
                    element={<UsersPosts />}></Route>
                  <Route
                    path="/chat"
                    element={<ChatGPT />}></Route>
                  <Route
                    path="/customers"
                    element={<h2>customers</h2>}></Route>
                  <Route
                    path="/integrations"
                    element={<h2>integrations</h2>}></Route>
                </Routes>
              </div>
            </div>
          </UsersProvider>
        </SignedIn>

        <SignedOut>
          <h3>Please Sign In!</h3>
        </SignedOut>
      </ClerkProvider>
    </>
  );
}
