import { useState } from 'react';

export default function LoggedOffIntro() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="flex absolute top-0 w-full h-full ">
      <div
        id="leftIntro"
        className={`flex justify-end items-center w-full text-6xl bg-secondary-100 ${
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
        className={`flex items-center justify-start w-full text-6xl bg-secondary-100 ${
          isOpened ? 'slide-right' : ''
        }`}></div>
      <div
        className={`flex absolute top-0 right-0 h-full items-center justify-start w-50 ${
          isOpened ? 'slide-right' : ''
        }`}>
        <p className="title text-6xl">Verse</p>
      </div>

      <div
        className={`loader-container ${isOpened ? 'slide-right-circle' : ''}`}>
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
  );
}
