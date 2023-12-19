import { SignInButton, SignUpButton } from '@clerk/clerk-react';
import { useState } from 'react';

export default function LoggedOffIntro() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className={`black-intro flex flex-col absolute top-0 w-full h-full ${
            isOpened ? 'hidden' : ''
          }`}>
          <div
            className={`w-full h-full border-b-small bg-black slide-up-intro`}></div>
          <div className={`w-full h-full  bg-black slide-down-intro`}></div>
        </div>
        <div
          className={`flex absolute top-0 w-full h-full ${
            isOpened ? 'hide' : ''
          }`}>
          <div
            id="leftIntro"
            className={`flex justify-end items-center w-full text-6xl bg-secondary-100 backdrop-blur-sm backdrop-filter ${
              isOpened ? 'slide-left' : ''
            }`}></div>
          <div
            className={`flex absolute top-0 h-full items-center justify-end w-50 ${
              isOpened ? 'slide-left' : ''
            }`}>
            <p className="title text-6xl ">Lumi</p>
          </div>

          <div
            id="rightIntro"
            className={`flex items-center justify-start w-full text-6xl bg-secondary-100 backdrop-blur-sm backdrop-filter ${
              isOpened ? 'slide-right' : ''
            }`}></div>
          <div
            className={`flex absolute top-0 right-0 h-full items-center justify-start w-50 ${
              isOpened ? 'slide-right' : ''
            }`}>
            <p className="title text-6xl">Verse</p>
          </div>

          <div
            className={`loader-container ${
              isOpened ? 'slide-right-circle' : ''
            }`}>
            <div
              onClick={() => setIsOpened(true)}
              className="loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="w-1/3 place-self-center flex flex-col gap-3 justify-center items-center">
          <div
            className={
              isOpened
                ? 'slide-down flex flex-col justify-center items-center gap-3 w-60 p-2 bg-primary-50 bg-opacity-25 backdrop-blur-sm backdrop-filter border-x-small rounded-lg'
                : 'hidden '
            }>
            <div
              className={`text-center font-bold text-xl text-secondary-800 ${
                isOpened ? 'welcome' : ''
              }`}>
              Welcome to LumiVerse!
            </div>
            <div className="bg-secondary-50 w-full h-10 flex justify-around items-center border rounded-lg border-x-0">
              <SignInButton />
              <SignUpButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
