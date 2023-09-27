import { useTheme } from './ThemeContext';

/* eslint-disable react/prop-types */
export default function Square({ value, onSquareClick }) {
  const darkTheme = useTheme();

  return (
    <>
      <button
        className={`${darkTheme == true ? 'dark' : 'light'} square`}
        onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
