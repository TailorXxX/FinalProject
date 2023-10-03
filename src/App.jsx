import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { dark } from '@clerk/themes';

import NavbarNextUI from './layout/NavbarNextUI';
import { UsersProvider } from './users/context/UsersContext';
import { Route, Routes } from 'react-router-dom';
import AccordionNextUI from './layout/AccordionNextUI';
import ChatGPT from './chat-gpt/ChatGPT';
import FeedPage from './posts/components/FeedPage';
import TicTacToeGame from './games/tictactoe/TicTacToeGame';
import ThemeProvider from './games/tictactoe/ThemeContext';
import Chessboard from './games/chess/Chessboard';

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
              <div className="col-start-3 col-end-5 ">
                <AccordionNextUI />
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
              <div className="col-start-9 col-end-11 "></div>
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
