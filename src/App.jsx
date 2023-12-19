import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Route, Routes } from 'react-router-dom';
import ChatGPT from './chat-gpt/ChatGPT';
import ThemeProvider from './games/tictactoe/ThemeContext';
import TicTacToeGame from './games/tictactoe/TicTacToeGame';
import LoggedOffIntro from './layout/LoggedOffIntro';
import NavbarNextUI from './layout/NavbarNextUI';
import FeedPage from './posts/components/FeedPage';
import FriendsPage from './users/components/FriendsPage';
import UserProfilePage from './users/components/UserProfilePage';
import { UsersProvider } from './users/context/UsersContext';

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

export default function App() {
  return (
    <>
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: '#ffffff',
            colorTextOnPrimaryBackground: '#e3fff4',
            colorText: '#e3fff4',
            colorTextSecondary: '#e3fff4',
            colorBackground: '#1f5759',
            colorInputText: '#e3fff4',
            colorInputBackground: '#e3fff4',
            colorAlphaShade: '#ffffff',
            borderRadius: '0px',
            fontSize: '1.2rem',
          },
        }}
        publishableKey={clerkPubKey}>
        {/* <Cursor /> */}

        <SignedOut>
          <LoggedOffIntro />
        </SignedOut>

        <SignedIn>
          <UsersProvider>
            <NavbarNextUI />
            <div className="w-full flex justify-center items-center max-w-xl m-auto">
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
                  path="/chat"
                  element={<ChatGPT />}></Route>
                <Route
                  path="/tic-tac-toe-game"
                  element={
                    <ThemeProvider>
                      <TicTacToeGame />
                    </ThemeProvider>
                  }></Route>
              </Routes>
            </div>
          </UsersProvider>
        </SignedIn>
      </ClerkProvider>
    </>
  );
}
