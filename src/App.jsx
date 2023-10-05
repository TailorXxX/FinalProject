import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';

import { Route, Routes } from 'react-router-dom';
import ChatGPT from './chat-gpt/ChatGPT';
import Chessboard from './games/chess/Chessboard';
import ThemeProvider from './games/tictactoe/ThemeContext';
import TicTacToeGame from './games/tictactoe/TicTacToeGame';
import NavbarNextUI from './layout/NavbarNextUI';
import FeedPage from './posts/components/FeedPage';
import { UsersProvider } from './users/context/UsersContext';

import FriendsPage from './users/components/FriendsPage';
import UserProfilePage from './users/components/UserProfilePage';

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
              <div className="col-start-2 col-end-4 ">
                {/* <AccordionNextUI /> */}
              </div>
              <div className="col-start-5 col-end-9 ">
                <Routes>
                  <Route
                    index
                    element={<FeedPage />}></Route>
                  <Route
                    path="/userprofile/:userId"
                    element={<UserProfilePage />}></Route>
                  <Route
                    path="/friends"
                    element={<FriendsPage />}></Route>
                  <Route
                    path="/chess"
                    element={<Chessboard />}></Route>
                  <Route
                    path="/chat"
                    element={<ChatGPT />}></Route>
                  <Route
                    path="/tictactoegame"
                    element={
                      <ThemeProvider>
                        <TicTacToeGame />
                      </ThemeProvider>
                    }></Route>
                </Routes>
              </div>
              <div className="col-start-10 col-end-12 "></div>
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
