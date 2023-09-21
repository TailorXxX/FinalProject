import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';

import NavbarNextUI from './layout/NavbarNextUI';
import { UsersProvider } from './users/context/UsersContext';
import { Route, Routes } from 'react-router-dom';
import AccordionNextUI from './layout/AccordionNextUI';
import UsersPosts from './users/components/UsersPosts';
import ChatGPT from './chat-gpt/ChatGPT';
import FeedPage from './feed/FeedPage';

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
              <div className="col-start-3 col-end-5 border">
                <AccordionNextUI />
              </div>
              <div className="col-start-5 col-end-9 border">
                <Routes>
                  <Route
                    index
                    element={<UsersPosts />}></Route>
                  <Route
                    path="/feed"
                    element={<FeedPage />}></Route>
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
              <div className="col-start-9 col-end-11 border"></div>
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
